import * as amplitude from '@amplitude/analytics-browser';
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export const ApiKey = {
    development: '',
    production: publicRuntimeConfig.amplitude_api_key
};

export const DefaultConfiguration = {
    plan: {
      source: 'web',
    }
  };


  export class Ampli {
    constructor() {
      /* @type {BrowserClient|undefined} */
      this.amplitude = undefined;
      this.disabled = false;
    }
  
    /**
     * @return {BrowserClient}
     */
    get client() {
      this.isInitializedAndEnabled();
      return this.amplitude;
    }
  
    /**
     * @return {boolean}
     */
    get isLoaded() {
      return this.amplitude != null;
    }
  
    /**
     * @private
     * @return {boolean}
     */
    isInitializedAndEnabled() {
      if (!this.isLoaded) {
        console.error('ERROR: Ampli is not yet initialized. Have you called ampli.load() on app start?');
        return false;
      }
      return !this.disabled;
    }
  
    /**
     * Initialize the Ampli SDK. Call once when your application starts.
     *
     * @param {LoadOptions} [options] Configuration options to initialize the Ampli SDK with.
     *
     * @return {PromiseResult}
     */
    load(options) {
      this.disabled = options?.disabled ?? false;
  
      if (this.isLoaded) {
        console.warn('WARNING: Ampli is already initialized. Ampli.load() should be called once at application startup.');
        return getVoidPromiseResult();
      }
  
      const env = options?.environment ?? 'development';
      const apiKey = options?.client?.apiKey ?? ApiKey[env];
  
      if (options?.client?.instance) {
        this.amplitude = options?.client?.instance;
      } else if (apiKey) {
        this.amplitude = amplitude.createInstance();
        return this.amplitude.init(apiKey, undefined, { ...DefaultConfiguration, ...options?.client?.configuration });
      } else {
        console.error("ERROR: ampli.load() requires 'environment', 'client.apiKey', or 'client.instance'");
      }
  
      return getVoidPromiseResult();
    }
  
    /**
     * Identify a user.
     *
     * @param {string|undefined} userId The user's id.
     * @param {EventOptions} [options] Optional event options.
     *
     * @return {PromiseResult}
     */
    identify(userId, options) {
      if (!this.isInitializedAndEnabled()) {
        return getVoidPromiseResult();
      }
  
      if (userId) {
        options = {...options, user_id: userId};
      }
  
      const ampIdentify = new amplitude.Identify();
      return this.amplitude.identify(ampIdentify, options);
    }
  
    /**
     * Set Group for the current user
     *
     * @param {string} groupType The group type.
     * @param {string|string[]} groupName The group name.
     * @param {EventOptions} [options] Optional event options.
     *
     * @return {PromiseResult}
     */
    setGroup(groupType, groupName, options) {
      if (!this.isInitializedAndEnabled()) {
        return getVoidPromiseResult();
      }
  
      return this.amplitude.setGroup(groupType, groupName, options);
    }
  
    /**
     * Identify a group.
     *
     * @param {string} groupType The group type.
     * @param {string|string[]} groupName The group name.
     * @param {EventOptions} [options] Options for this groupIdentify call.
     *
     * @return {PromiseResult}
     */
    groupIdentify(groupType, groupName, options) {
      if (!this.isInitializedAndEnabled()) {
        return getVoidPromiseResult();
      }
  
      const amplitudeIdentify = new amplitude.Identify();
      return this.amplitude.groupIdentify(groupType, groupName, amplitudeIdentify, options);
    }
  
    /**
     * Track event
     *
     * @param {BaseEvent} event The event to track.
     * @param {EventOptions} [options] Optional event options.
     *
     * @return {PromiseResult}
     */
    track(event, options) {      
      if (!this.isInitializedAndEnabled()) {
        return getVoidPromiseResult();
      }
  
      return this.amplitude.track(event, options);
    }
  }
  
  export const ampli = new Ampli();
  
  