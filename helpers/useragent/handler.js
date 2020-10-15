const AndroidUserAgentList = require('./android')
const IosUserAgentList = require('./ios')

class UserAgentHandler {
    constructor(){
        this.androidUserAgents = [
            'Dalvik/2.1.0 (Linux; U; Android 10; SM-A750GN Build/QP1A.190711.020)'
        ]
        this.defaultVersions = {
            // Definitions for "default versions" of operating systems and client apps
            // Note that for Android, the default version chosen is "Android 9" (API Level 28) due to highest market share in Indonesia
            binus: "1.13.0",
            android: "9",
            androidApiLevel: 28,
            ios: "14.0.1",
            
            // The iOS Safari Build number now freezes to "15E148" for compatibility and privacy reasons
            // Source: https://webkit.org/blog/8042/release-notes-for-safari-technology-preview-46/
            iosSafariBuild: "15E148",
    
            // Alamofire (https://github.com/Alamofire/Alamofire) is a Swift library to handle HTTP requests for iOS apps
            // The default version set corresponds to the library version used in the latest BINUS Mobile app
            alamofire: "5.0.0"
        }
    }
    getAndroidUserAgent(options){
        // Override uaType to Dalvik to reflect the HTTP request from the actual app
        options.uaType = "dalvik"
        return new AndroidUserAgentList(options).toString()
    }
    getIosUserAgent(options){
        // Override uaType to Binus to reflect the HTTP request from the actual app
        options.uaType = "binus"
        options.binusVersion = this.defaultVersions.binus
        return new IosUserAgentList(options).toString()
    }
    getMobileUserAgent(options){
        if (options.platform && options.platform == "ios") return getIosUserAgent(options)
        else getAndroidUserAgent(options)
    }
}

module.exports = UserAgentHandler