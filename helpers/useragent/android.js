class AndroidUserAgentList {
    constructor(options){
        this.androidList = {
            "10": {
                "QKQ1.190825.002": [
                    "Mi 9T"
                ],
                "QP1A.190711.020": [
                    "SM-A515F",
                    "SM-A750GN",
                    "SM-N960F"
                ]
            },
            "9": {
                "PKQ1.190714.001": [
                    "CPH1933"
                ],
                "PKQ1.190630.001": [
                    "CPH1907"
                ],
                "PKQ1.190319.001": [
                    "Redmi 7A",
                    "Redmi 8",
                    "Redmi 8A"
                ],
                "PKQ1.181021.001": [
                    "Mi A3",
                    "Redmi 7",
                    "Redmi Y3"
                ],
                "PKQ1.180904.001": [
                    "Redmi Note 5",
                    "Redmi Note 7"
                ],
                "PPR1.180610.011": [
                    "CPH1823",
                    "CPH1989",
                    "CPH1969",
                    "CPH1923",
                    "CPH2001",
                    "CPH2083",
                    "Redmi 6",
                    "Redmi 6A",
                    "Redmi Note 8 Pro",
                    "SM-A750GN",
                    "SM-G950F",
                    "SM-G960F",
                    "SM-G965F",
                    "SM-N960F"
                ]
            },
            "8.1.0": {
                "M1AJQ": [
                    "SM-G610F",
                    "SM-J530F",
                    "SM-M105F",
                    "SM-N960F"
                ],
                "O11019": [
                    "CPH1909",
                    "vivo 1726",
                    "vivo 1803",
                    "vivo 1806",
                    "vivo 1808",
                    "vivo 1812",
                    "vivo 1814",
                    "vivo 1816",
                    "vivo 1820"
                ],
                "OPM1.171019.026": [
                    "CPH1853",
                    "CPH1901",
                    "V1818A",
                    "vivo 1716",
                    "vivo 1718",
                    "vivo 1723",
                    "vivo 1727",
                    "vivo 1805",
                    "vivo 1807",
                    "vivo 1811",
                    "vivo 1817",
                    "vivo 1850"
                ]
            },
            "8.0.0": {
                "R16NW": [
                    "SM-A600G",
                    "SM-A750GN"
                ]
            },
            "7.1.2": {
                "N2G47H": [
                    "vivo 1611",
                    "vivo 1716",
                    "vivo 1718",
                    "vivo 1719",
                    "vivo 1850",
                    "vivo X9",
                    "vivo X9L",
                    "vivo X9Plus L",
                    "vivo Y66i A",
                    "vivo Y79",
                    "vivo Y79A"
                ]
            },
            "7.1.1": {
                "N6F26Q": [
                    "CPH1729",
                    "vivo Y75A"
                ],
                "NMF26F": [
                    "CPH1801",
                    "vivo Xplay6"
                ]
            },
            "7.0": {
                "NRD90M": [
                    "SM-G610F",
                    "vivo 1612",
                    "vivo 1713",
                    "vivo 1714"
                ]
            },
            "6.0.1": {
                "MMB29M": [
                    "SM-G930F",
                    "SM-G930FD",
                    "vivo 1603",
                    "vivo 1606",
                    "vivo 1606A",
                    "vivo 1610",
                    "vivo Y55",
                    "vivo Y55A",
                    "vivo Y66"
                ],
                "RB3N5C": [
                    "RedMi Note 5"
                ]
            },
            "6.0": {
                "MRA58K": [
                    "LG-K420",
                    "LG-K430",
                    "vivo 1601",
                    "vivo 1609",
                    "vivo 1713",
                    "vivo Y67A",
                    "vivo Y67L"
                ]
            },
            "5.1.1": {
                "LMY47V": [
                    "A37f",
                    "LG-K420",
                    "SM-A9000",
                    "vivo V3",
                    "vivo V3Max",
                    "vivo V3Max A",
                    "vivo X6S A",
                    "vivo X7",
                    "vivo X7Plus",
                    "vivo Y21L",
                    "vivo Y31L",
                    "vivo Y51L"
                ]
            },
            "5.0.2": {
                "LRX22G": [
                    "SM-A500F",
                    "SM-G530H",
                    "vivo Y31A",
                    "vivo Y51",
                    "vivo Y51L"
                ]
            }
        }


        // Currently, the "uaType" is set to Firefox by default, since we need to research more about Chrome UAs
        this.uaType = options.uaType || "firefox"
        
        if (!options.androidVersion || !this.androidList[options.androidVersion]) options.androidVersion = "9"
        this.androidVersion = options.androidVersion
        if (!options.androidBuildVersion || !this.androidList[options.androidVersion][options.androidBuildVersion]){
            // Get a valid Android release build number
            let list = Object.keys(this.androidList[options.androidVersion])
            options.androidBuildVersion = list[Math.floor(Math.random() * list.length)]
        }
        this.androidBuildVersion = options.androidBuildVersion
        if (!options.androidDevice){
            // Get a valid Android device list
            let list = this.androidList[options.androidVersion][options.androidBuildVersion]
            options.androidDevice = list[Math.floor(Math.random() * list.length)]
        }
        this.androidDevice = options.androidDevice

        // Optional: Firefox for Mobile version. If not specified, we will generate a new one based on the new Firefox for Android browser (Codename: Fenix)
        this.firefoxVersion = options.firefoxVersion || Math.floor(79 + Math.random() * (82 - 79))
    }
    toString(){
        // Detect the uaType
        switch (this.uaType){
            case "dalvik": return `Dalvik/2.1.0; U; Android ${this.androidVersion}; ${this.androidDevice} Build/${this.androidBuildVersion})`
            case "firefox": return `Mozilla/5.0 (Android ${this.androidVersion}; Mobile; rv:${this.firefoxVersion}.0) Gecko/${this.firefoxVersion}.0 Firefox/${this.firefoxVersion}.0`
        }
    }
}

module.exports = AndroidUserAgentList