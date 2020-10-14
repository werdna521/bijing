class IosUserAgentList {
    constructor(options){
        // Note: For compatibility with the mobile app, we will only list iOS releases from 10 onwards
        // The build number "15E148" is assigned on iOS 12 onwards to mimic behavior of Safari User Agents (to prevent fingerprinting)
        this.iosList = {
            "14.0": "15E148",
            "14.0.1": "15E148",
            "13.0": "15E148",
            "13.1": "15E148",
            "13.1.1": "15E148",
            "13.1.2": "15E148",
            "13.1.3": "15E148",
            "13.2": "15E148",
            "13.2.1": "15E148",
            "13.2.2": "15E148",
            "13.2.3": "15E148",
            "13.3": "15E148",
            "13.3.1": "15E148",
            "13.4": "15E148",
            "13.4.1": "15E148",
            "13.5": "15E148",
            "13.5.1": "15E148",
            "13.6": "15E148",
            "13.6.1": "15E148",
            "13.7": "15E148"
        }

        this.uaType = options.uaType || "safari"

        if (!options.iosVersion || !this.iosList[options.iosVersion]) options.iosVersion = "14.0.1"
        this.iosVersion = options.iosVersion
        this.safariBuildVersion = this.iosList[options.iosVersion]

        this.binusVersion = options.binusVersion || "1.13.0"
    }
    toString(){
        // Detect the uaType
        switch (this.uaType){
            case "safari": return `Mozilla/5.0 (iPhone; CPU iPhone OS ${options.iosVersion.replace('.', '_')} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/${options.iosVersion} Mobile/${options.safariBuildVersion} Safari/604.1`
            case "binus": return `BINUS Student/${this.binusVersion} (com.binus-itdivision.mobilestudent; build:1; iOS ${options.iosVersion}) Alamofire/5.0.0`
        }
    }
}

module.exports = IosUserAgentList