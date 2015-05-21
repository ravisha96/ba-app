/* global ba */
ba.directive('windowMenuBar', ['GUI', '$window', function (nw, $window) {
    return {
      restrict: 'A',
      link: function (scope, iElement, iAttrs) {

        var windowMenu = new nw.Menu({
          type: 'menubar'
        });

        // Mac OSX
        if (process.platform === "darwin") {
          windowMenu.createMacBuiltin('betting-assistance');
        }

        // Entry Menu
        var Entry = new nw.Menu();

        Entry.append( 
          new nw.MenuItem({
            label: 'User', 
            key: 'F1',
            click: function () {
              $window.location.href = '#/user-entry';
            }
          })
        );

        Entry.append( 
          new nw.MenuItem({label: 'Team', key: 'F2'})
        );

        Entry.append( 
          new nw.MenuItem({label: 'State', key: 'F3'})
        );

        windowMenu.append(new nw.MenuItem({
            label: 'Entry',
            submenu: Entry
          })
        );

        // Match Menu
        var Match = new nw.Menu();

        Match.append( 
          new nw.MenuItem({label: 'Last Match'})
        );

        Match.append( 
          new nw.MenuItem({label: 'Transaction Entry'})
        );

        windowMenu.append(new nw.MenuItem({
            label: 'Match',
            submenu: Match
          })
        );

        // Result Menu
        var Result = new nw.Menu();

        Result.append(
          new nw.MenuItem({label: 'Declare Match/Session'})
        );

        Result.append(
          new nw.MenuItem({label: 'Connect Report'})
        );

        Result.append(
          new nw.MenuItem({label: 'Connect Report (cup)'})
        );

        windowMenu.append(new nw.MenuItem({
            label: 'Result',
            submenu: Result
          })
        );

        // Report Menu
        var Report = new nw.Menu();

        Report.append(
          new nw.MenuItem({label: 'Individual Transaction Match'})
        );

        Report.append(
          new nw.MenuItem({label: 'Individual Transaction Session'})
        );

        Report.append(
          new nw.MenuItem({label: 'Before Declaration Status'})
        );

        Report.append(
          new nw.MenuItem({label: 'Before Declaration Status [selective]'})
        );

        Report.append(
          new nw.MenuItem({label: 'Before Declaration Status [patti]'})
        );

        Report.append(
          new nw.MenuItem({label: 'Dibba User Report'})
        );

        windowMenu.append(new nw.MenuItem({
            label: 'Report',
            submenu: Report
          })
        );


        // Setting Menu
        var Setting = new nw.Menu();

        Setting.append(
          new nw.MenuItem({label: 'Setting Transaction'})
        );

        Setting.append(
          new nw.MenuItem({label: 'Setting Report'})
        );

        windowMenu.append(new nw.MenuItem({
            label: 'Setting',
            submenu: Setting
          })
        );

        // Settings Menu
        var Settings = new nw.Menu();

        Settings.append(
          new nw.MenuItem({label: 'Login'})
        );

        Settings.append(
          new nw.MenuItem({label: 'Renew Subscription'})
        );

        Settings.append(
          new nw.MenuItem({label: 'Commission Session'})
        );

        Settings.append(
          new nw.MenuItem({label: 'Commission Match'})
        );

        windowMenu.append(new nw.MenuItem({
            label: 'Settings',
            submenu: Settings
          })
        );


        // Tools Menu
        var Tools = new nw.Menu();

        Tools.append(
          new nw.MenuItem({label: 'Compact Database'})
        );

        Tools.append(
          new nw.MenuItem({label: 'Refresh Data Info Blank Database'})
        );

        windowMenu.append(new nw.MenuItem({
            label: 'Tools',
            submenu: Tools
          })
        );

        // Betfair Menu
        var Betfair = new nw.Menu();

        windowMenu.append(new nw.MenuItem({
            label: 'Betfair',
            submenu: Betfair
          })
        );


        // Setting Menu
        var Exit = new nw.Menu();

        windowMenu.append(new nw.MenuItem({
            label: 'Exit',
            submenu: Exit
          })
        );

        // Assign to window
        nw.Window.get().menu = windowMenu;

      }
    };
  }]);