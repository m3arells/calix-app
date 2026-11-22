
(() => {
  'use strict';

  const KEYS = [
    'calix_workouts',
    'calix_prs',
    'calix_goal',
    'calix_skills',
    'calix_dayTasks'
  ];

  const $ = id => document.getElementById(id);

  function readData() {
    const data = {};

    for (const key of KEYS) {
      const raw = localStorage.getItem(key);

      data[key] = raw === null
        ? (key === 'calix_goal' ? null :
           key === 'calix_skills' ? {} : [])
        : JSON.parse(raw);
    }

    return data;
  }

  function validateBackup(backup) {
    if (
      !backup ||
      backup.app !== 'CALIX' ||
      backup.formatVersion !== 1 ||
      !backup.data
    ) {
      throw new Error('File backup CALIX non valido.');
    }

    const d = backup.data;

    if (
      !Array.isArray(d.calix_workouts) ||
      !Array.isArray(d.calix_prs) ||
      !(d.calix_goal === null ||
        (typeof d.calix_goal === 'object' &&
         !Array.isArray(d.calix_goal))) ||
      typeof d.calix_skills !== 'object' ||
      d.calix_skills === null ||
      Array.isArray(d.calix_skills) ||
      !Array.isArray(d.calix_dayTasks)
    ) {
      throw new Error('Formato dei dati non riconosciuto.');
    }

    return d;
  }

  function status(message, error = false) {
    const el = $('backup-status');
    if (!el) return;

    el.textContent = message;
    el.setAttribute('role', error ? 'alert' : 'status');
  }

  function exportBackup() {
    try {
      const backup = {
        app: 'CALIX',
        formatVersion: 1,
        exportedAt: new Date().toISOString(),
        data: readData()
      };

      const blob = new Blob(
        [JSON.stringify(backup, null, 2)],
        { type: 'application/json' }
      );

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');

      a.href = url;
      a.download =
        'calix-backup-' +
        new Date().toISOString().slice(0, 10) +
        '.json';

      document.body.appendChild(a);
      a.click();
      a.remove();

      setTimeout(() => URL.revokeObjectURL(url), 1000);
      status('Backup esportato correttamente!');
    } catch (error) {
      status(error.message || 'Errore durante il backup.', true);
    }
  }

  async function importBackup(file) {
    if (!file) return;

    try {
      const parsed = JSON.parse(await file.text());
      const data = validateBackup(parsed);

      if (!confirm(
        'Il ripristino sostituirà i dati CALIX presenti su questo dispositivo. Vuoi continuare?'
      )) return;

      const previous = {};

      for (const key of KEYS) {
        previous[key] = localStorage.getItem(key);
      }

      try {
        for (const key of KEYS) {
          localStorage.setItem(key, JSON.stringify(data[key]));
        }
      } catch (error) {
        for (const key of KEYS) {
          if (previous[key] === null) {
            localStorage.removeItem(key);
          } else {
            localStorage.setItem(key, previous[key]);
          }
        }
        throw error;
      }

      status('Ripristino completato! Ricarica CALIX.');
      $('backup-reload').hidden = false;

    } catch (error) {
      status(error.message || 'Errore durante il ripristino.', true);
    } finally {
      $('backup-file').value = '';
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    $('backup-export')?.addEventListener(
      'click',
      exportBackup
    );

    $('backup-import')?.addEventListener('click', () => {
      $('backup-file')?.click();
    });

    $('backup-file')?.addEventListener('change', event => {
      importBackup(event.target.files?.[0]);
    });

    $('backup-reload')?.addEventListener('click', () => {
      location.reload();
    });
  });
})();
