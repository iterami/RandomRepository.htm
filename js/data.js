'use strict';

function generate(){
    let types = [
      'game',
      'simulation',
      'tool',
    ];

    window['generate_' + types[core_random_integer({
      'max': 3,
    })]]();
}

function generate_game(){
    let repositories = {
      'Avoidance-2D.htm': '../Avoidance-2D.htm/index.htm',
      'Click.htm': '../Click.htm/index.htm',
      'Countdown.htm': '../Countdown.htm/index.htm',
      'Dropdown.htm': '../Dropdown.htm/index.htm',
      'FractalRunner-2D3D.htm': '../FractalRunner-2D3D.htm/index.htm',
      'Hexagons-2D.htm': '../Hexagons-2D.htm/index.htm',
      'Hrad.htm': '../Hrad.htm/index.htm',
      'Jetpack-2D.htm': '../Jetpack-2D.htm/index.htm',
      'Match.htm': '../Match.htm/index.htm',
      'Multiverse.htm': '../Multiverse.htm/index.htm',
      'Particleball-2D.htm': '../Particleball-2D.htm/index.htm',
      'Platform-2D.htm': '../Platform-2D.htm/index.htm',
      'Platform-2D.sh': 'https://github.com/iterami/Platform-2D.sh',
      'Race-2D.htm': '../Race-2D.htm/index.htm',
      'RockPaperScissors.htm': '../RockPaperScissors.htm/index.htm',
      'RPG-Above.htm': '../RPG-Above.htm/index.htm',
      'RPG-Side.htm': '../RPG-Side.htm/index.htm',
      'RTS-2D.htm': '../RTS-2D.htm/index.htm',
      'Shooter-2D.htm': '../Shooter-2D.htm/index.htm',
      'Slots.htm': '../Slots.htm/index.htm',
      'Snakish.htm': '../Snakish.htm/index.htm',
      'SpeedButton.htm': '../SpeedButton.htm/index.htm',
      'SpeedShape.htm': '../SpeedShape.htm/index.htm',
      'SpeedText.htm': '../SpeedText.htm/index.htm',
      'SpeedType.htm': '../SpeedType.htm/index.htm',
      'Sudoku.htm': '../Sudoku.htm/index.htm',
      'U1.htm': '../U1.htm/index.htm',
    };

    window.open(
      repositories[core_random_key({
        'object': repositories,
      })],
      '_blank'
    );
}

function generate_simulation(){
    let repositories = {
      '9YG0E6r.htm': '../9YG0E6r.htm/index.htm',
      'Aquarium-2D.htm': '../Aquarium-2D.htm/index.htm',
      'Clock.htm': '../Clock.htm/index.htm',
      'ColorDrops.htm': '../ColorDrops.htm/index.htm',
      'ColorSquares.htm': '../ColorSquares.htm/index.htm',
      'ColorSteps.htm': '../ColorSteps.htm/index.htm',
      'ColorWaves.htm': '../ColorWaves.htm/index.htm',
      'D2LoD-ArcaneSanctuary.htm': '../D2LoD-ArcaneSanctuary.htm/index.htm',
      'DotEyeIllusion.htm': '../DotEyeIllusion.htm/index.htm',
      'Fireworks-2D.htm': '../Fireworks-2D.htm/index.htm',
      'Hallway-2D3D.htm': '../Hallway-2D3D.htm/index.htm',
      'LayeredSnake-2D3D.htm': '../LayeredSnake-2D3D.htm/index.htm',
      'ParticleRun-2D.htm': '../ParticleRun-2D.htm/index.htm',
      'PlusPlus.htm': '../PlusPlus.htm/index.htm',
      'Poem.htm': '../Poem.htm/index.htm',
      'QjnyYap.htm': '../QjnyYap.htm/index.htm',
      'Rain-2D.htm': '../Rain-2D.htm/index.htm',
      'random_number_test.gtk': 'https://github.com/iterami/MultiverseEditor.gtk',
      'random_number_test.htm': '../random_number_test.htm/index.htm',
      'SnowyMountains.htm': '../SnowyMountains.htm/index.htm',
      'SolarSystem-2D.htm': '../SolarSystem-2D.htm/index.htm',
      'Starfield-2D3D.htm': '../Starfield-2D3D.htm/index.htm',
      'TimeColors.htm': '../TimeColors.htm/index.htm',
      'Trains-2D.htm': '../Trains-2D.htm/index.htm',
      'Tubes-2D3D.htm': '../Tubes-2D3D.htm/index.htm',
      'Warped.htm': '../Warped.htm/index.htm',
    };

    window.open(
      repositories[core_random_key({
        'object': repositories,
      })],
      '_blank'
    );
}

function generate_tool(){
    let repositories = {
      'Alarm.htm': '../Alarm.htm/index.htm',
      'AspectRatio.htm': '../AspectRatio.htm/index.htm',
      'BaseConverter.htm': '../BaseConverter.htm/index.htm',
      'BinaryDataEndecoder.htm': '../BinaryDataEndecoder.htm/index.htm',
      'Birthday.htm': '../Birthday.htm/index.htm',
      'Bookmarklets.htm': '../Bookmarklets.htm/index.htm',
      'Calculator.htm': '../Calculator.htm/index.htm',
      'Chrome-iterami-DevTools': 'https://github.com/iterami/Chrome-iterami-DevTools',
      'Chrome-iterami-Extension': 'https://github.com/iterami/Chrome-iterami-Extension',
      'Chrome-iterami-Theme': 'https://github.com/iterami/Chrome-iterami-Theme',
      'ColorSelector.htm': '../ColorSelector.htm/index.htm',
      'common': '../common/index.htm',
      'ConfigFiles': 'https://github.com/iterami/ConfigFiles',
      'Documentation.htm': '../Documentation.htm/index.htm',
      'Duel.htm': '../Duel.htm/index.htm',
      'EmojiText.htm': '../EmojiText.htm/index.htm',
      'ESP-Test.htm': '../ESP-Test.htm/index.htm',
      'EVETools.gtk': 'https://github.com/iterami/EVETools.gtk',
      'ExperienceCalculator.htm': '../ExperienceCalculator.htm/index.htm',
      'FileBrowser.gtk': 'https://github.com/iterami/FileBrowser.gtk',
      'GitHub-API.htm': '../GitHub-API.htm/index.htm',
      'GMod-iterami-Addon': 'GMod-iterami-Addon',
      'Guides.htm': '../Guides.htm/index.htm',
      'InterestCalculator.htm': '../InterestCalculator.htm/index.htm',
      'IssueExport.htm': '../IssueExport.htm/index.htm',
      'iterami.github.io': 'https://github.com/iterami/iterami.github.io',
      'LocalStorage.htm': '../LocalStorage.htm/index.htm',
      'MultiverseEditor.gtk': 'https://github.com/iterami/MultiverseEditor.gtk',
      'MultiverseEditor.htm': '../MultiverseEditor.htm/index.htm',
      'MultiverseLevels.htm': '../MultiverseLevels.htm/index.htm',
      'OS.asm': 'https://github.com/iterami/OS.asm',
      'PasswordGenerator.htm': '../PasswordGenerator.htm/index.htm',
      'Percentages.htm': '../Percentages.htm/index.htm',
      'PixelEditor.htm': '../PixelEditor.htm/index.htm',
      'ProcessEditor': 'https://github.com/iterami/ProcessEditor',
      'RandomRepository.htm': '../RandomRepository.htm/index.htm',
      'RandomSCP.htm': '../RandomSCP.htm/index.htm',
      'ReactionTest.htm': '../ReactionTest.htm/index.htm',
      'RNG.htm': '../RNG.htm/index.htm',
      'RomanNumerals.htm': '../RomanNumerals.htm/index.htm',
      'RTS-Boxing.htm': '../RTS-Boxing.htm/index.htm',
      'SC-AI.cpp': 'https://github.com/iterami/SC-AI.cpp',
      'Scripts': 'https://github.com/iterami/Scripts',
      'TextEditor.gtk': 'https://github.com/iterami/TextEditor.gtk',
      'TextInfo.htm': '../TextInfo.htm/index.htm',
      'Time.htm': '../Time.htm/index.htm',
      'Timer.htm': '../Timer.htm/index.htm',
      'TinyMCE-Editor.htm': '../TinyMCE-Editor.htm/index.htm',
      'Trigonometry.htm': '../Trigonometry.htm/index.htm',
      'UnitConverter.htm': '../UnitConverter.htm/index.htm',
      'URIViewer.htm': '../URIViewer.htm/index.htm',
      'WASD-2D.htm': '../WASD-2D.htm/index.htm',
      'WindowInfo.htm': '../WindowInfo.htm/index.htm',
      'WZ2100-AI.js': 'https://github.com/iterami/WZ2100-AI.js',
    };

    window.open(
      repositories[core_random_key({
        'object': repositories,
      })],
      '_blank'
    );
}
