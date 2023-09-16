import { style } from '@angular/animations';
import { Injectable } from '@angular/core';
import * as $ from 'jquery'
@Injectable({
  providedIn: 'root'
})
export class Theme {
  public constructor(name) {
    this.name = name;
    this.styles = [];
  }
  public addNewStyle(selectorText, styleName, value): void {
    this.styles.push(new Style(selectorText, styleName, value));
  }
  public static createThemeFromObj(obj): Theme {
    var theme:Theme = new Theme(obj.name);
    for (var i = 0; i < obj.styles.length; i++) {
      var style = obj.styles[i];
      theme.addNewStyle(style.selectorText, style.styleName, style.value)
    }
    return theme;
  }
  public name: string;
  public styles: Style[];
}
export class Style {
  public constructor(
    public selectorText: string,
    public styleName: string,
    public value: string) { }
}
@Injectable()
export class StyleService {
  private _activeTheme: Theme;
  private _themes: Theme[];
  private _headElement: HTMLHeadElement;
  private get headElement(): HTMLHeadElement {
    if (!this._headElement && document.getElementsByTagName("head").length > 0) {
      this._headElement = document.getElementsByTagName("head")[0];
    }
    return this._headElement;
  }
  private _cssStyleSheet: CSSStyleSheet;
  private get cssStyleSheet(): CSSStyleSheet {
    if (!this._cssStyleSheet) {
      if (!document.styleSheets || this.headElement === null) return null;
      // Get the first style sheet that is enabled and mediaText is empty or screen.
      this._cssStyleSheet = Array.from(document.styleSheets).find(s => !s.disabled && (s.media.mediaText == "" || s.media.mediaText.indexOf("screen") !== -1)) as CSSStyleSheet;

      // If the style sheet doesn't exist yet, then create it.
      if (!this._cssStyleSheet) this._cssStyleSheet = this.createCssStyleSheet();
    }
    return this._cssStyleSheet;
  }
  constructor() {

  }
  public setStyle(selectorText: string, styleName: string, value: string): void {
    let rule: CSSStyleRule = this.getStyleRule(selectorText);
    if (!rule) return;
    //rule.style[styleName] = value;
    console.log('click');
    $(selectorText).css(styleName, value);
  }
  public setStyles(selectorText: string, styles: { [styleName: string]: string } | CSSStyleDeclaration) {
    let rule: CSSStyleRule = this.getStyleRule(selectorText);
    console.log('click');
    if (!rule) return;
    Object.keys(styles).forEach(styleName => {
       //rule.style[styleName] = styles[styleName];
    });
  }
  private createCssStyleSheet(): CSSStyleSheet {
    // Create the style sheet element.
    let styleSheetElement = document.createElement("style");
    styleSheetElement.type = "text/css";
    // Append the style sheet element to the head.
    this.headElement.appendChild(styleSheetElement);
    return styleSheetElement.sheet as CSSStyleSheet;
  }
  private getStyleRule(selectorText: string): CSSStyleRule {
    if (!this.cssStyleSheet) return;
    let rules: CSSRuleList = this.cssStyleSheet.cssRules.length > 0 || this.cssStyleSheet.rules.length == 0 ? this.cssStyleSheet.cssRules : this.cssStyleSheet.rules;
    let rule: CSSStyleRule = Array.from(rules).find(r => r instanceof CSSStyleRule && r.selectorText.toLowerCase() == selectorText.toLowerCase()) as CSSStyleRule;
    // If the selector rule does not exist, create it.
    if (!rule) {
      let ruleIndex = this.cssStyleSheet.insertRule(selectorText + "{ }", rules.length);
      rule = rules[ruleIndex] as CSSStyleRule;
    }
    return rule;
  }
  public instantiateThemes(obj): void {
    this._themes = [];
    for (var i = 0; i < obj.length; i++) {
      this._themes.push(Theme.createThemeFromObj(obj[i]));
    }
  }
  public getTheme(themeName): Theme {
    for (var i = 0; i < this._themes.length; i++) {
      var theme: Theme = this._themes[i] as Theme;
      if (themeName === theme.name) {
        return theme;
      }
    }
    return this._themes[0] as Theme
  }
  public applyTheme(themeName: string) {
    var theme;
    if (themeName === 'random') {
      theme = this.getRandomTheme();
    } else {
      theme = this.getTheme(themeName);
    }
    this._activeTheme = theme;
    for (var i = 0; i < theme.styles.length; i++) {
      var style: Style = theme.styles[i];
      this.setStyle(style.selectorText, style.styleName, style.value);
    }
  }
  public getRandomTheme(): Theme {
    var theme: Theme = new Theme('random');
    theme.addNewStyle(".theme-color-bg", "background", this.randomColorString());
    theme.addNewStyle(".theme-color-bg", "color", this.randomColorString());
    var colour = this.randomColorString();
    theme.addNewStyle(".theme-color-box", "background", colour);
    theme.addNewStyle(".theme-color-box", "color", this.randomColorString());
    theme.addNewStyle(".theme-color-fill", "fill", colour);
    theme.addNewStyle(".theme-color-box-hover:hover", "background", this.randomColorString());
    return theme;
  }
  randomColorString() {
    var s = '#';
    for (var i = 0; i < 6; i++) {
      var j = Math.floor(Math.random() * Math.floor(16));
      s += '0123456789abcdef'.charAt(j);
    }
    return s;
  }
  public getActiveTheme(): Theme {
    if (this._activeTheme) return this._activeTheme;
    else return new Theme('default');
  }
}