"use strict";

const cases = [
    {
        id: 1,
        code: "WM-001",
        title: "Phishing",
        category: "Human Threat",
        analogy: "Pallet Collapse",
        cardDescription:
            "Learn how urgency and apparent authority can pressure employees into acting without verification.",
        severity: "High-Risk Human Threat",
        summary:
            "Attack pattern: urgency, authority, and skipped verification",

        profile: [
            ["Cyber Threat", "Phishing"],
            ["Primary Tactic", "Urgency and Authority"],
            ["Human Vulnerability", "Trust Without Verification"],
            ["Required Defense", "Verify Before Acting"],
            ["Warehouse Analogy", "Pallet Collapse"]
        ],

        briefingTitle:
            "How phishing manipulates employee behavior",
        briefingText:
            "Phishing attacks often create urgency and appear to come from a trusted person or department. The goal is to pressure an employee into acting before verifying the request.",
        simulationText:
            "In this operational incident recreation, a forklift operator receives an urgent instruction to move an unstable pallet. The operator is pressured to skip the normal inspection process because the request sounds authoritative and time-sensitive.",

        videoTitle:
            "Operational Incident: Phishing",
        videoPrompt:
            "Observe how urgency overrides verification",
        videoMeta:
            "Cyber Threat: Phishing · Warehouse Analogy: Pallet Collapse",
        video: "assets/videos/WM-001-Phishing.mp4",

        decisionTitle:
            "Which response best follows anti-phishing behavior?",
        decisionPrompt:
            "An urgent radio message tells the operator to move the unstable pallet immediately. What should the operator do?",
        decisionOptions: [
            {
                text:
                    "Move the pallet immediately because the instruction sounds urgent",
                correct: false
            },
            {
                text:
                    "Stop, inspect the load, and verify the identity and authority of the requester",
                correct: true
            },
            {
                text:
                    "Ask another employee to move the pallet without inspecting it",
                correct: false
            }
        ],
        decisionIncorrect:
            "Urgency should never override established safety or security procedures. Try again.",
        decisionCorrect:
            "Stop, inspect the load, and independently verify the requester before acting.",

        analysisThreat: "Phishing",
        analysisText:
            "The analysis identified a phishing behavior pattern: an urgent request, apparent authority, and pressure to act without verification.",
        physicalComparisonTitle:
            "Urgent Radio Instruction",
        physicalComparisonText:
            "The operator receives a time-sensitive instruction and is pressured to bypass an established inspection process.",
        cyberComparisonTitle:
            "Phishing Message",
        cyberComparisonText:
            "An attacker uses urgency and apparent authority to pressure an employee into clicking, opening, paying, or sharing information before verifying the sender.",
        principleTitle:
            "Verify Before You Trust",
        principleText:
            "Stop and independently verify unexpected or urgent requests before clicking links, opening attachments, sharing information, transferring money, or changing normal procedures.",

        knowledgeTitle:
            "You receive an urgent email from someone claiming to be a company executive.",
        knowledgePrompt:
            "The message asks you to open a link and enter your company password immediately. What is the most secure response?",
        knowledgeOptions: [
            {
                text:
                    "Open the link quickly so the executive does not have to wait",
                correct: false
            },
            {
                text:
                    "Reply to the email and ask whether the request is real",
                correct: false
            },
            {
                text:
                    "Do not open the link; verify the request through an approved, independent communication channel and report the message",
                correct: true
            }
        ],
        knowledgeIncorrect:
            "Never use the suspicious message itself to verify whether the request is legitimate. Try again.",
        knowledgeCorrect:
            "Verify the request through an approved independent channel and report the suspicious message."
    },

    {
        id: 2,
        code: "WM-002",
        title: "Social Engineering",
        category: "Access Threat",
        analogy: "Unauthorized Entry",
        cardDescription:
            "Recognize how attackers manipulate employees to gain access to restricted systems and locations.",
        severity: "High-Risk Access Threat",
        summary:
            "Attack pattern: confidence, familiarity, and bypassed access controls",

        profile: [
            ["Cyber Threat", "Social Engineering"],
            ["Primary Tactic", "Trust and Familiarity"],
            ["Human Vulnerability", "Desire to Be Helpful"],
            ["Required Defense", "Verify Identity"],
            ["Warehouse Analogy", "Unauthorized Entry"]
        ],

        briefingTitle:
            "How social engineers manipulate access",
        briefingText:
            "Social engineering attacks rely on human interaction rather than technical hacking. Attackers may appear confident, friendly, frustrated, or familiar to convince an employee to ignore normal security procedures.",
        simulationText:
            "In this operational incident recreation, a person wearing a delivery uniform arrives at a restricted warehouse entrance. They claim their badge is not working and say a supervisor is expecting them.",

        videoTitle:
            "Operational Incident: Social Engineering",
        videoPrompt:
            "Observe how confidence and familiarity create trust",
        videoMeta:
            "Cyber Threat: Social Engineering · Warehouse Analogy: Unauthorized Entry",
        video: "assets/videos/WM-002-Social-Engineering.mp4",

        decisionTitle:
            "Which response best protects restricted access?",
        decisionPrompt:
            "The visitor says they are late, their badge is not working, and a supervisor is waiting. What should the employee do?",
        decisionOptions: [
            {
                text:
                    "Let the visitor inside because they appear to be a legitimate delivery worker",
                correct: false
            },
            {
                text:
                    "Keep the entrance secured and independently verify the visitor through the approved access process",
                correct: true
            },
            {
                text:
                    "Ask the visitor to follow another employee through the secured entrance",
                correct: false
            }
        ],
        decisionIncorrect:
            "Clothing, confidence, urgency, and familiarity do not prove identity. Try again.",
        decisionCorrect:
            "Keep the entrance secured and independently verify the visitor through the approved access process.",

        analysisThreat:
            "Social Engineering",
        analysisText:
            "The analysis identified an impersonation pattern involving confidence, urgency, apparent familiarity, and an attempt to bypass established access controls.",
        physicalComparisonTitle:
            "Unauthorized Visitor",
        physicalComparisonText:
            "A person claims to belong in a restricted area and pressures an employee to bypass the normal badge verification process.",
        cyberComparisonTitle:
            "Impersonation Attack",
        cyberComparisonText:
            "An attacker pretends to be an employee, vendor, manager, or support technician to obtain access, credentials, or sensitive information.",
        principleTitle:
            "Verify Identity Before Granting Access",
        principleText:
            "Never allow familiarity, uniforms, urgency, job titles, or confidence to replace approved identity verification and access-control procedures.",

        knowledgeTitle:
            "Someone calls claiming to be from the IT department.",
        knowledgePrompt:
            "The caller says your account has a serious problem and asks you to provide your password so they can repair it. What is the most secure response?",
        knowledgeOptions: [
            {
                text:
                    "Provide the password because the caller says the issue is urgent",
                correct: false
            },
            {
                text:
                    "Refuse to provide the password, end the call, and independently contact IT through an approved channel",
                correct: true
            },
            {
                text:
                    "Provide part of the password to determine whether the caller is legitimate",
                correct: false
            }
        ],
        knowledgeIncorrect:
            "Legitimate IT employees should never request your password. Try again.",
        knowledgeCorrect:
            "Refuse the request, end the call, and independently contact IT through an approved communication channel."
    },

    {
        id: 3,
        code: "WM-003",
        title: "Weak Passwords",
        category: "Credential Threat",
        analogy: "Improper Equipment Use",
        cardDescription:
            "Examine how shared or predictable credentials allow unauthorized people to operate protected resources.",
        severity: "High-Risk Credential Threat",
        summary:
            "Attack pattern: shared credentials, predictable access codes, and lost accountability",

        profile: [
            ["Cyber Threat", "Weak Passwords"],
            ["Primary Tactic", "Credential Guessing"],
            ["Human Vulnerability", "Convenience Over Security"],
            ["Required Defense", "Strong, Unique Credentials"],
            ["Warehouse Analogy", "Shared Equipment Code"]
        ],

        briefingTitle:
            "How weak credentials undermine access control",
        briefingText:
            "Weak, reused, or shared passwords make protected systems easier to access and make it difficult to determine who performed an action.",
        simulationText:
            "In this operational incident recreation, an employee uses a powered pallet jack protected by the shared code 1234. Because everyone knows the code, unauthorized use cannot be traced to one accountable operator.",

        videoTitle:
            "Operational Incident: Weak Passwords",
        videoPrompt:
            "Observe how shared access removes accountability",
        videoMeta:
            "Cyber Threat: Weak Passwords · Warehouse Analogy: Shared Equipment Code",
        video: "assets/videos/WM-003-Weak-Passwords.mp4",

        decisionTitle:
            "Which response best protects equipment access?",
        decisionPrompt:
            "A coworker says everyone uses the same four-digit code for the pallet jack. What should the employee do?",
        decisionOptions: [
            {
                text:
                    "Use the shared code because it saves time",
                correct: false
            },
            {
                text:
                    "Stop and request individually assigned access through the approved process",
                correct: true
            },
            {
                text:
                    "Write the shared code on the equipment so no one forgets it",
                correct: false
            }
        ],
        decisionIncorrect:
            "Shared and predictable access codes remove accountability and make unauthorized use easier. Try again.",
        decisionCorrect:
            "Request individually assigned access through the approved process instead of using a shared code.",

        analysisThreat:
            "Weak Passwords",
        analysisText:
            "The analysis identified a credential-security failure involving a predictable shared code, unrestricted access, and no reliable record of who used the equipment.",
        physicalComparisonTitle:
            "Shared Equipment Code",
        physicalComparisonText:
            "Multiple employees use one predictable code, allowing unapproved operation with no individual accountability.",
        cyberComparisonTitle:
            "Shared or Weak Password",
        cyberComparisonText:
            "Attackers can guess, reuse, or obtain common credentials and enter systems without a reliable audit trail.",
        principleTitle:
            "Strong, Unique Credentials Protect Accountability",
        principleText:
            "Use a unique password for every account, never share credentials, and use multifactor authentication whenever it is available.",

        knowledgeTitle:
            "You need a password for a new company account.",
        knowledgePrompt:
            "Which option is the most secure?",
        knowledgeOptions: [
            {
                text:
                    "Use WarMachine123 because it is easy to remember",
                correct: false
            },
            {
                text:
                    "Reuse the password from your personal email account",
                correct: false
            },
            {
                text:
                    "Create a long, unique password and enable multifactor authentication",
                correct: true
            }
        ],
        knowledgeIncorrect:
            "Predictable or reused passwords allow one compromised credential to expose multiple accounts. Try again.",
        knowledgeCorrect:
            "Use a long, unique password and enable multifactor authentication whenever it is available."
    },

    {
        id: 4,
        code: "WM-004",
        title: "Unknown USB Devices",
        category: "Device Threat",
        analogy: "Unknown Device Found",
        cardDescription:
            "Learn why unfamiliar devices must never be connected to company equipment without authorization.",
        severity: "Critical Device Threat",
        summary:
            "Attack pattern: curiosity, untrusted media, and unauthorized connection",

        profile: [
            ["Cyber Threat", "Malicious USB Device"],
            ["Primary Tactic", "Curiosity and Trust"],
            ["Human Vulnerability", "Unverified Connection"],
            ["Required Defense", "Report Unknown Devices"],
            ["Warehouse Analogy", "Unlabeled Device"]
        ],

        briefingTitle:
            "Why unknown removable media creates immediate risk",
        briefingText:
            "Unknown USB devices may contain malware, steal information, or automatically execute harmful commands when connected to a computer.",
        simulationText:
            "In this operational incident recreation, an unlabeled electronic device is found near a warehouse workstation. An employee considers connecting it to identify the owner.",

        videoTitle:
            "Operational Incident: Unknown USB Devices",
        videoPrompt:
            "Observe how curiosity can bypass device controls",
        videoMeta:
            "Cyber Threat: Unknown USB Device · Warehouse Analogy: Unlabeled Device Found",
        video: "assets/videos/WM-004-Unknown-USB-Devices.mp4",

        decisionTitle:
            "Which response best protects company systems?",
        decisionPrompt:
            "You find an unlabeled USB drive near a company workstation. What should you do?",
        decisionOptions: [
            {
                text:
                    "Connect it to the nearest computer to identify the owner",
                correct: false
            },
            {
                text:
                    "Do not connect it; secure the area and report the device through the approved process",
                correct: true
            },
            {
                text:
                    "Take it home and check it on a personal computer",
                correct: false
            }
        ],
        decisionIncorrect:
            "An unknown device must never be connected to a company or personal computer to determine what it contains. Try again.",
        decisionCorrect:
            "Leave the device disconnected, secure the area, and report it through the approved process.",

        analysisThreat:
            "Malicious Removable Media",
        analysisText:
            "The analysis identified an untrusted-device pattern involving an unknown source, user curiosity, and an attempt to connect unauthorized media to a protected system.",
        physicalComparisonTitle:
            "Unknown Device Found",
        physicalComparisonText:
            "An employee discovers an unlabeled device and cannot verify where it came from or whether it is safe.",
        cyberComparisonTitle:
            "Malicious USB Device",
        cyberComparisonText:
            "An attacker leaves removable media where an employee may connect it, allowing malware or unauthorized commands to enter the network.",
        principleTitle:
            "Never Connect an Unknown Device",
        principleText:
            "Leave unfamiliar removable media disconnected, protect the area, and report the device to IT or security through an approved channel.",

        knowledgeTitle:
            "A vendor gives you a USB drive containing an invoice.",
        knowledgePrompt:
            "The device has not been approved by your company. What is the most secure response?",
        knowledgeOptions: [
            {
                text:
                    "Connect it because the vendor appears legitimate",
                correct: false
            },
            {
                text:
                    "Do not connect it; request the file through an approved transfer method and report the device",
                correct: true
            },
            {
                text:
                    "Ask a coworker to test it first",
                correct: false
            }
        ],
        knowledgeIncorrect:
            "A familiar person or company does not make unapproved removable media safe. Try again.",
        knowledgeCorrect:
            "Request the file through an approved transfer method and report the unapproved device."
    },

    {
        id: 5,
        code: "WM-005",
        title: "Ransomware",
        category: "Operational Threat",
        analogy: "Warehouse Shutdown",
        cardDescription:
            "Understand how one compromised system can stop an entire organization from operating.",
        severity: "Critical Operational Threat",
        summary:
            "Attack pattern: system compromise, operational disruption, and rapid escalation",

        profile: [
            ["Cyber Threat", "Ransomware"],
            ["Primary Tactic", "Encryption and Extortion"],
            ["Human Vulnerability", "Delayed Reporting"],
            ["Required Defense", "Isolate and Report"],
            ["Warehouse Analogy", "Warehouse Shutdown"]
        ],

        briefingTitle:
            "How ransomware can stop an entire operation",
        briefingText:
            "Ransomware can encrypt files, disable critical systems, and spread across connected devices. Rapid isolation and reporting can reduce the damage.",
        simulationText:
            "In this operational incident recreation, warehouse scanners, labels, inventory systems, and loading schedules suddenly stop working, bringing distribution operations to a halt.",

        videoTitle:
            "Operational Incident: Ransomware",
        videoPrompt:
            "Observe how one failure can stop connected operations",
        videoMeta:
            "Cyber Threat: Ransomware · Warehouse Analogy: Warehouse Shutdown",
        video: "assets/videos/WM-005-Ransomware.mp4",

        decisionTitle:
            "Which response best limits ransomware damage?",
        decisionPrompt:
            "A workstation displays a ransom message and shared files become unavailable. What should the employee do first?",
        decisionOptions: [
            {
                text:
                    "Pay the ransom immediately to restore operations",
                correct: false
            },
            {
                text:
                    "Disconnect the affected device from the network and immediately report the incident",
                correct: true
            },
            {
                text:
                    "Continue working and wait to see whether the problem clears",
                correct: false
            }
        ],
        decisionIncorrect:
            "Delayed action can allow ransomware to spread to additional systems. Do not pay or continue using the device. Try again.",
        decisionCorrect:
            "Disconnect the affected device from network connections and immediately notify the approved response team.",

        analysisThreat:
            "Ransomware",
        analysisText:
            "The analysis identified a ransomware pattern involving inaccessible files, a ransom demand, and disruption to connected business operations.",
        physicalComparisonTitle:
            "Warehouse Shutdown",
        physicalComparisonText:
            "Scanners, labels, inventory records, and loading systems become unavailable, stopping normal work.",
        cyberComparisonTitle:
            "Ransomware Attack",
        cyberComparisonText:
            "Malware encrypts data and disables systems, preventing employees from accessing the tools required to operate.",
        principleTitle:
            "Isolate Quickly and Report Immediately",
        principleText:
            "Disconnect affected equipment from network connections, stop using it, preserve evidence, and contact the approved incident-response team without delay.",

        knowledgeTitle:
            "A company computer suddenly displays a ransom demand.",
        knowledgePrompt:
            "Which action is the most secure?",
        knowledgeOptions: [
            {
                text:
                    "Restart it repeatedly and continue trying to sign in",
                correct: false
            },
            {
                text:
                    "Contact the attacker to negotiate payment",
                correct: false
            },
            {
                text:
                    "Isolate the device, stop using it, and immediately notify the approved incident-response team",
                correct: true
            }
        ],
        knowledgeIncorrect:
            "Restarting repeatedly or contacting the attacker may increase the damage and interfere with incident response. Try again.",
        knowledgeCorrect:
            "Isolate the device, stop using it, and immediately report the incident through the approved response process."
    }
];
