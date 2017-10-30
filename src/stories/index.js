
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info';
import infoAddon from "@storybook/addon-info/dist/index"
import {setAddon} from "@storybook/vue/dist/client/index"

setOptions({
  name: 'EJ Components',
  url: 'https://github.com/kerosan/vue-components.git',
  downPanelInRight: true,
});

setDefaults({
  header: false, // Toggles display of header with component name and description
  inline: true, // Displays info inline vs click button to view
  source: true, // Displays the source of story Component
  propTables: false, // [/* Components used in story */], // displays Prop Tables with this components
  propTablesExclude: [], // Exclude Components from being shown in Prop Tables section
  styles: {}, // Overrides styles of addon
  marksyConf: {}, // Overrides components used to display markdown. Warning! This option's name will be likely deprecated in favor to "components" with the same API in 3.3 release. Follow this PR #1501 for details
  maxPropsIntoLine: 1, // Max props to display per line in source code
  maxPropObjectKeys: 10,
  maxPropArrayLength: 10,
  maxPropStringLength: 100,
});
setAddon(infoAddon);

require("./Text.js");
require("./Title.js");
