import { Application, Assets } from 'pixi.js';
import { Spine } from '@esotericsoftware/spine-pixi-v8';


(async () => {
    const app = new Application();
    await app.init({ background: '#1099bb', resizeTo: window });

    // Then adding the application's canvas to the DOM body.
    document.body.appendChild(app.canvas);

    // Load the assets.
    await Assets.load([
        {
            alias: 'spineboyData',
            src: 'assets/spineboy/spineboy.json',
        },
        {
            alias: 'spineboyAtlas',
            src: 'assets/spineboy/spineboy.atlas',
        },
    ]);

    const spineboy = Spine.from({
        skeleton: 'spineboyData',
        atlas: 'spineboyAtlas',
        scale: 0.5, // Adjust scale as needed
    });

    spineboy.state.setAnimation(0, 'death', true);
    // spineboy.state.setAnimation(1, 'shoot', false);

    spineboy.x = app.screen.width / 2;
    spineboy.y = app.screen.height;

    app.stage.addChild(spineboy);
})();
