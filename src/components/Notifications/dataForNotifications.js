export const data = {
    "couldntCreateNewCounter": {
        "title": () => `Couldn't create counter`,
        "description": "The Internet connection appears to be offline.",
        "actions": {
            "cancel": false,
            "dismiss": true,
            "retry": false,
            "delete": false
        }
    },
    "couldntUpdateCounter": {
        "title": (counterName) => `Couldn’t update "${counterName}" to 1`,
        "description": "The Internet connection appears to be offline.",
        "actions": {
            "cancel": false,
            "dismiss": true,
            "retry": true,
            "delete": false
        }
    },
    "confirmationDeleteCounter": {
        "title": (counterName) => `Delete the "${counterName}" counter?`,
        "description": "This cannot be undone.",
        "actions": {
            "cancel": true,
            "dismiss": false,
            "retry": false,
            "delete": true
        }
    },
    "couldntDeleteCounter": {
        "title": (counterName) => `Couldn't delete "${counterName}"`,
        "description": "The Internet connection appears to be offline.",
        "actions": {
            "cancel": false,
            "dismiss": false,
            "retry": false,
            "delete": false
        }
    }
}