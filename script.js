    // CURSEUR PERSONNALISÉ
    const cursorDot = document.getElementById('custom-cursor-dot');
    const cursorRing = document.getElementById('custom-cursor-ring');

    document.addEventListener('mousemove', (e) => {
      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;
      cursorRing.style.left = `${e.clientX}px`;
      cursorRing.style.top = `${e.clientY}px`;
    });

    document.querySelectorAll('a, button, .glass-card').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorRing.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorRing.style.borderColor = '#10b981';
      });
      el.addEventListener('mouseleave', () => {
        cursorRing.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorRing.style.borderColor = 'rgba(16, 185, 129, 0.4)';
      });
    });

    // SMOOTH SCROLL
    const lenis = new Lenis({ duration: 1.2, smooth: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    // TOGGLE THEME
    function toggleTheme() {
      const html = document.documentElement;
      const btnText = document.getElementById('theme-btn-text');
      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        html.classList.add('light');
        btnText.innerText = 'CLAIR';
      } else {
        html.classList.remove('light');
        html.classList.add('dark');
        btnText.innerText = 'SOMBRE';
      }
    }

    // SIMULATEUR JIRA ITIL
    function runJiraSimulation() {
      const widget = document.getElementById('jira-widget');
      const status = document.getElementById('jira-status');
      const step = document.getElementById('jira-step');
      
      widget.classList.remove('hidden');
      
      // Étape 1 : Ouverture du ticket
      step.innerHTML = "<div>1. Réception alerte ITIL : <span class='text-title font-bold'>Panne projecteur Wi-Fi Bâtiment A</span></div>";
      status.innerText = "NOUVEAU TICKET";
      status.className = "px-2 py-0.5 rounded text-[10px] bg-red-500/20 text-red-400 font-bold";

      // Étape 2 : Prise en charge N2 (après 3,5 secondes)
      setTimeout(() => {
        step.innerHTML += "<div class='mt-2 pt-2 border-t border-stone-800/40'>2. Qualification N2 : <span class='text-title font-bold'>Diagnostic JAMF Pro + Redémarrage AP Meraki</span></div>";
        status.innerText = "EN COURS (N2)";
        status.className = "px-2 py-0.5 rounded text-[10px] bg-yellow-500/20 text-yellow-400 font-bold";
      }, 3500);

      // Étape 3 : Résolution (après 7,5 secondes au total)
      setTimeout(() => {
        step.innerHTML += "<div class='mt-2 pt-2 border-t border-stone-800/40'>3. Clôture ITIL : <span class='text-emerald-400 font-bold'>Signal Wi-Fi restauré. SLA respecté (08 min).</span></div>";
        status.innerText = "RÉSOLU & FERMÉ";
        status.className = "px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 font-bold";
      }, 7500);
    }

    // TERMINAL GRAV CMS
    function runGravTerminal() {
      const widget = document.getElementById('vscode-widget');
      const container = document.getElementById('terminal-content');
      
      widget.classList.remove('hidden');
      container.innerHTML = "";

      const lines = [
        { text: "$ grav new-project --theme antimatter", delay: 200, color: "text-emerald-400" },
        { text: "-> Downloading Grav CMS Core v1.7.42...", delay: 700, color: "text-stone-400" },
        { text: "-> Installing Twig Engine & PHP dependencies...", delay: 1300, color: "text-stone-400" },
        { text: "-> Compiling custom CSS / Tailwind assets...", delay: 2000, color: "text-stone-400" },
        { text: "✔ Project initialized successfully on http://localhost:8080", delay: 2700, color: "text-green-400 font-bold" }
      ];

      lines.forEach(item => {
        setTimeout(() => {
          const lineEl = document.createElement('div');
          lineEl.className = item.color;
          lineEl.innerText = item.text;
          container.appendChild(lineEl);
        }, item.delay);
      });
    }

    // SIMULATEUR OMS - SOLOG SA
    function runOmsSimulation() {
      const widget = document.getElementById('oms-widget');
      const status = document.getElementById('oms-status');
      const output = document.getElementById('oms-output');

      widget.classList.remove('hidden');
      status.innerText = "EXECUTION PHP...";
      status.className = "px-2 py-0.5 rounded text-[10px] bg-yellow-500/20 text-yellow-400 font-bold";
      
      output.innerHTML = "<div>$ <span class='text-title'>PHP Script:</span> processing_user_access.php</div>";

      setTimeout(() => {
        output.innerHTML += "<div>[1/3] Interrogation BD MySQL (Query: <span class='text-emerald-400'>SELECT * FROM users WHERE role = 'N2_SUPPORT'</span>)...</div>";
      }, 1200);

      setTimeout(() => {
        output.innerHTML += "<div>[2/3] Validation des privilèges système & génération du jeton de session...</div>";
      }, 2800);

      setTimeout(() => {
        output.innerHTML += "<div class='text-emerald-400 font-bold'>[3/3] ✔ Outil interne synchronisé — Accès printer accordé sans erreur (0.04s).</div>";
        status.innerText = "SUCCESS (200 OK)";
        status.className = "px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 font-bold";
      }, 4500);
    }

    // SIMULATEUR KBSD SA
    function runKbsdSimulation() {
      const widget = document.getElementById('kbsd-widget');
      const status = document.getElementById('kbsd-status');
      const output = document.getElementById('kbsd-output');

      widget.classList.remove('hidden');
      status.innerText = "SCRAPING WEB...";
      status.className = "px-2 py-0.5 rounded text-[10px] bg-yellow-500/20 text-yellow-400 font-bold";

      output.innerHTML = "<div>1. Collecte des requêtes Google & mentions marque (Secteur Luxe)...</div>";

      setTimeout(() => {
        output.innerHTML += "<div>2. Détection alerte : <span class='text-red-400 font-bold'>Article tiers non conforme identifié sur la page 2</span></div>";
        status.innerText = "ALERT DETECTED";
        status.className = "px-2 py-0.5 rounded text-[10px] bg-red-500/20 text-red-400 font-bold";
      }, 2000);

      setTimeout(() => {
        output.innerHTML += "<div>3. Action SEO corrective : Optimisation du maillage d'autorités sur le CMS Concrete5.</div>";
      }, 4000);

      setTimeout(() => {
        output.innerHTML += "<div class='text-purple-400 font-bold'>4. ✔ Score E-Réputation rétabli à 98% positif. Mentions nettoyées.</div>";
        status.innerText = "OPTIMIZED";
        status.className = "px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 font-bold";
      }, 6200);
    }

    // SIMULATEUR INTEGRAAL IT
    function runIntegraalSimulation() {
      const widget = document.getElementById('integraal-widget');
      const status = document.getElementById('integraal-status');
      const output = document.getElementById('integraal-output');

      widget.classList.remove('hidden');
      status.innerText = "READING FILE...";
      status.className = "px-2 py-0.5 rounded text-[10px] bg-yellow-500/20 text-yellow-400 font-bold";

      output.innerHTML = "<div class='text-stone-400'>Lecture du fichier : <code>projets_genève_2013.csv</code> (Données brutes avec séparateur ';')...</div>";

      setTimeout(() => {
        output.innerHTML += "<div class='bg-black/40 p-2 rounded text-[11px] font-mono text-amber-300 border border-stone-800'>\"ID\";\"PROJET\";\"ANNEE\";\"STATUT\"<br>\"104\";\"Pont du Mont-Blanc Inspection\";\"2013\";\"Terminé\"<br>\"105\";\"Structure Bâtiment CEVA\";\"2013\";\"En cours\"</div>";
      }, 1800);

      setTimeout(() => {
        output.innerHTML += "<div class='text-subtle'>Conversion de <code>fgetcsv()</code> vers rendu HTML dynamique...</div>";
      }, 3500);

      setTimeout(() => {
        output.innerHTML += `
          <div class='mt-2 border border-stone-700 rounded overflow-hidden'>
            <table class='w-full text-left text-[11px]'>
              <thead class='bg-stone-800 text-title'>
                <tr><th class='p-1.5'>ID</th><th class='p-1.5'>Projet Thomas Jundt SA</th><th class='p-1.5'>Statut</th></tr>
              </thead>
              <tbody class='divide-y divide-stone-800 text-subtle'>
                <tr><td class='p-1.5'>104</td><td class='p-1.5'>Pont du Mont-Blanc Inspection</td><td class='p-1.5 text-emerald-400'>Terminé</td></tr>
                <tr><td class='p-1.5'>105</td><td class='p-1.5'>Structure Bâtiment CEVA</td><td class='p-1.5 text-yellow-400'>En cours</td></tr>
              </tbody>
            </table>
          </div>
        `;
        status.innerText = "PARSED & RENDERED";
        status.className = "px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 font-bold";
      }, 5500);
    }

    // FORMULAIRE DE CONTACT
    async function handleContactSubmit(event) {
      event.preventDefault();

      const form = event.target;
      const btn = document.getElementById('submit-btn');
      const btnText = document.getElementById('btn-text');
      const feedback = document.getElementById('form-feedback');

      // Prépare les données avec la clé d'accès Web3Forms
      const formData = new FormData(form);
      formData.append("access_key", "807caf68-a397-4c66-94c0-134fa5307646");

      // Animation chargement terminal
      btnText.innerText = 'ENVOI EN COURS...';
      btn.classList.add('opacity-50', 'pointer-events-none');
      feedback.classList.add('hidden');

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const data = await response.json();

        if (response.ok) {
          // Succès
          btnText.innerText = '✔ TRANSMIS AVEC SUCCÈS';
          btn.className = 'w-full sm:w-auto bg-emerald-500 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3';
          
          feedback.classList.remove('hidden');
          feedback.innerText = 'Message reçu ! Je vous réponds sous 24h.';
          feedback.className = 'text-xs text-emerald-500 font-bold';

          form.reset();
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        // Erreur
        btnText.innerText = 'TRANSMETTRE LE PAQUET';
        btn.classList.remove('opacity-50', 'pointer-events-none');
        
        feedback.classList.remove('hidden');
        feedback.innerText = 'Erreur d\'envoi. Veuillez réespayer.';
        feedback.className = 'text-xs text-rose-500 font-bold';
      }
    }

    // Scroll fluide natif ciblé uniquement sur les ancres (ex: #contact)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    console.log(
      "%c 👋 Salut ! Curieux de voir le code ? \n Site développé par Bosco Strautmann (bstrautmann.com)",
      "color: #6366f1; font-size: 14px; font-weight: bold; background: #0a0a0a; padding: 8px 12px; border-radius: 6px;"
    );