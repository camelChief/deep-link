import DeepLinkPlugin from "main";
import { App, PluginSettingTab, Setting } from "obsidian";

export default class DeepLinkSettingTab extends PluginSettingTab {
	private plugin: DeepLinkPlugin;

	constructor(app: App, plugin: DeepLinkPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;
		containerEl.empty();

        new Setting(containerEl)
            .setName('Nothing Here Yet!')
            .setHeading();
	}
}
