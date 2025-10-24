import { Plugin } from 'obsidian';
import DeepLinkSettingTab from 'src/deep-link-setting-tab';
import { DeepLinkSettings } from 'src/settings';

export default class DeepLinkPlugin extends Plugin {
	settings: DeepLinkSettings;

	async onload() {
		await this.loadSettings();
		this.addSettingTab(new DeepLinkSettingTab(this.app, this));
	}

	onunload() {}

	async loadSettings() {
		this.settings = await this.loadData();
		this.settings ??= {
			noop: true
		};
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
