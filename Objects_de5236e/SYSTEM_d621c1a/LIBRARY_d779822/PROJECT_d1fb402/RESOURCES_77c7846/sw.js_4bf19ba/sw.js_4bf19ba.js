self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll(
        [
          './gifs/build_up.gif',
          './gifs/DOWN.gif',
          './gifs/drilling.gif',
          './gifs/UP.gif',
          './gifs/washing.gif',
          './highcharts/highcharts.js',
          './highcharts/accessibility.js',
          './highcharts/series-label.js',
          './highcharts/xrange.js',
          './font/css/all.min.css',
          './webmicfg.js',
          './main.js',
          './project.js',
          './webmi.js',
          './Table.js',
          './favicon.ico',
          './ru/xhtml/AGENT.DISPLAYS.Default',
          './ru/xhtml/AGENT.DISPLAYS.NewView.Auth.Loading',
          './ru/xhtml/AGENT.DISPLAYS.NewView.IRM2_2_0.main_irm2_0',
          './IMG/settings.png',
          './IMG/pngwing.com.png',
          './CSS/table.css',
          './CSS/main.css',
          './CSS/authBar.css',
          './CSS/userIcon.css',
          './CSS/input.css',
          './CSS/user.css',
          './ru/xhtml/AGENT.DISPLAYS.NewView.IRM2_2_0.main_2.0',
          './RigView/RigConstruction/hvost.png',
          './RigView/RigConstruction/ekspl.png',
          './RigView/RigConstruction/tehn.png',
          './RigView/RigConstruction/kond.png',
          './RigView/RigConstruction/napravl.png',
          './RigView/geos/alevrit.jpg'
        ]
      );
    })
  );
});