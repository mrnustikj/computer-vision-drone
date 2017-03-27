/**
 * Created by tobias on 03.03.17.
 */


var Voice = require('../../../main/drone/voice/Voice');


'use strict'

/* register a Voice handler for landing on hotword detection  */
var voice = new Voice("../../../main/drone/voice/resources/common.res");

voice.addHotWord("../../../main/drone/voice/resources/not_aus.pmdl", "dronestop", 0.35);

voice.registerHotwordReaction( function (index, hotword) {
    console.log('hotword', index, hotword);

});

voice.triggerStart();

