"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const STORAGE_KEY =
        "projectIronGateCompletedCases";

    const LEARNER_NAME_KEY =
        "projectIronGateLearnerName";

    const screens = {
        welcome: document.getElementById("welcomeScreen"),
        dashboard: document.getElementById("dashboardScreen"),
        incident: document.getElementById("incidentScreen"),
        completion: document.getElementById("completionScreen")
    };

    const startOrientationBtn =
        document.getElementById("startOrientationBtn");

    const resumeOrientationBtn =
        document.getElementById("resumeOrientationBtn");

    const backToDashboardBtn =
        document.getElementById("backToDashboardBtn");

    const completeInvestigationBtn =
        document.getElementById("completeInvestigationBtn");

    const reviewCasesBtn =
        document.getElementById("reviewCasesBtn");

    const printCertificateBtn =
        document.getElementById("printCertificateBtn");

    const restartOrientationBtn =
        document.getElementById("restartOrientationBtn");

    const dashboardResetBtn =
        document.getElementById("dashboardResetBtn");

    const learnerNameInput =
        document.getElementById("learnerNameInput");

    const learnerNameError =
        document.getElementById("learnerNameError");

    const dashboardLearnerName =
        document.getElementById("dashboardLearnerName");

    const completionLearnerName =
        document.getElementById("completionLearnerName");

    const printLearnerName =
        document.getElementById("printLearnerName");

    const brandHomeLink =
        document.getElementById("brandHomeLink");

    const welcomeStatusText =
        document.getElementById("welcomeStatusText");

    const progressRing =
        document.getElementById("progressRing");

    const progressPercent =
        document.getElementById("progressPercent");

    const progressText =
        document.getElementById("progressText");

    const incidentGrid =
        document.getElementById("incidentGrid");

    const decisionPanel =
        document.getElementById("decisionPanel");

    const cyberAnalysis =
        document.getElementById("cyberAnalysis");

    const knowledgeCheck =
        document.getElementById("knowledgeCheck");

    const decisionOptions =
        document.getElementById("decisionOptions");

    const knowledgeOptions =
        document.getElementById("knowledgeOptions");

    const decisionFeedback =
        document.getElementById("decisionFeedback");

    const knowledgeFeedback =
        document.getElementById("knowledgeFeedback");

    const incidentVideo =
        document.getElementById("incidentVideo");

    let completedCases =
        readProgress();

    let learnerName =
        readLearnerName();

    let activeCase =
        null;


    function readProgress() {

        try {

            const stored =
                JSON.parse(localStorage.getItem(STORAGE_KEY));

            if (!Array.isArray(stored)) {
                return [];
            }

            return stored.filter((caseId) =>
                Number.isInteger(caseId) &&
                caseId >= 1 &&
                caseId <= cases.length
            );

        } catch (error) {

            console.warn(
                "Saved progress could not be read.",
                error
            );

            return [];
        }
    }


    function readLearnerName() {

        return (
            localStorage.getItem(LEARNER_NAME_KEY) || ""
        ).trim();
    }


    function saveLearnerName(name) {

        learnerName =
            name.trim();

        localStorage.setItem(
            LEARNER_NAME_KEY,
            learnerName
        );
    }


    function updateLearnerIdentity() {

        const displayName =
            learnerName || "WarMachine Employee";

        if (learnerNameInput) {
            learnerNameInput.value =
                learnerName;
        }

        if (dashboardLearnerName) {
            dashboardLearnerName.textContent =
                learnerName
                    ? `Welcome, ${learnerName}.`
                    : "";
        }

        if (completionLearnerName) {
            completionLearnerName.textContent =
                displayName;
        }

        if (printLearnerName) {
            printLearnerName.textContent =
                displayName;
        }
    }


    function validateAndSaveLearnerName() {

        const enteredName =
            learnerNameInput.value.trim();

        if (!enteredName) {

            learnerNameError.textContent =
                "Please enter your name before starting.";

            learnerNameInput.focus();

            return false;
        }

        learnerNameError.textContent =
            "";

        saveLearnerName(
            enteredName
        );

        updateLearnerIdentity();

        return true;
    }


    function saveProgress() {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(completedCases)
        );
    }


    function showScreen(screenName) {

        if (
            screenName !== "incident" &&
            incidentVideo
        ) {
            incidentVideo.pause();
        }

        Object.entries(screens).forEach(
            ([name, element]) => {

                const selected =
                    name === screenName;

                element.hidden =
                    !selected;

                element.classList.toggle(
                    "active-screen",
                    selected
                );
            }
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    function isComplete(caseId) {

        return completedCases.includes(caseId);
    }


    function isUnlocked(caseId) {

        return (
            caseId === 1 ||
            isComplete(caseId - 1)
        );
    }


    function getNextIncompleteCase() {

        return (
            cases.find((caseData) =>
                !isComplete(caseData.id) &&
                isUnlocked(caseData.id)
            ) || cases[0]
        );
    }


    function updateWelcome() {

        updateLearnerIdentity();

        const count =
            completedCases.length;

        resumeOrientationBtn.hidden =
            count === 0 || count === cases.length;

        if (count === 0) {

            welcomeStatusText.textContent =
                "Ready to Begin";

            return;
        }

        if (count === cases.length) {

            welcomeStatusText.textContent =
                "Orientation Complete";

            return;
        }

        welcomeStatusText.textContent =
            `${count} of 5 Cases Complete`;
    }


    function renderDashboard() {

        const count =
            completedCases.length;

        const percent =
            count * 20;

        progressPercent.textContent =
            `${percent}%`;

        progressText.textContent =
            `${count} of 5 Cases Complete`;

        progressRing.style.setProperty(
            "--progress-degrees",
            `${percent * 3.6}deg`
        );

        incidentGrid.innerHTML =
            "";

        cases.forEach((caseData) => {

            const complete =
                isComplete(caseData.id);

            const unlocked =
                isUnlocked(caseData.id);

            const card =
                document.createElement("article");

            card.className =
                `incident-card ${
                    complete
                        ? "complete"
                        : unlocked
                            ? "available"
                            : "locked"
                }`;

            const statusText =
                complete
                    ? "Complete"
                    : unlocked
                        ? "Available"
                        : "Locked";

            const buttonText =
                complete
                    ? "Review Completed Case"
                    : unlocked
                        ? "Begin Investigation"
                        : `Complete WM-${String(
                            caseData.id - 1
                        ).padStart(3, "0")} to Unlock`;

            card.innerHTML = `
                <div class="incident-card-top">
                    <span class="case-number">
                        ${caseData.code}
                    </span>

                    <span class="status-badge">
                        ${statusText}
                    </span>
                </div>

                <p class="threat-type">
                    Cyber Threat
                </p>

                <h2>${caseData.title}</h2>

                <p class="incident-analogy">
                    Operational Incident Recreation: ${caseData.analogy}
                </p>

                <p>${caseData.cardDescription}</p>

                <button
                    class="case-button"
                    type="button"
                    ${unlocked ? "" : "disabled"}
                >
                    ${buttonText}
                </button>
            `;

            const button =
                card.querySelector(".case-button");

            button.addEventListener(
                "click",
                () => openCase(caseData.id)
            );

            incidentGrid.appendChild(card);
        });
    }


    function setText(elementId, value) {

        document.getElementById(
            elementId
        ).textContent = value;
    }


    function renderThreatProfile(profile) {

        const container =
            document.getElementById("threatProfile");

        container.innerHTML =
            "";

        profile.forEach(([label, value]) => {

            const row =
                document.createElement("div");

            row.innerHTML = `
                <dt>${label}</dt>
                <dd>${value}</dd>
            `;

            container.appendChild(row);
        });
    }


    function renderAnswerButtons(
        container,
        options,
        answerType
    ) {

        container.innerHTML =
            "";

        options.forEach((option, index) => {

            const button =
                document.createElement("button");

            button.type =
                "button";

            button.className =
                answerType === "decision"
                    ? "decision-button"
                    : "knowledge-button";

            button.dataset.correct =
                String(option.correct);

            button.innerHTML = `
                <span class="answer-letter">
                    ${String.fromCharCode(65 + index)}
                </span>
                <span>${option.text}</span>
            `;

            button.addEventListener(
                "click",
                () => handleAnswer(
                    button,
                    option,
                    answerType
                )
            );

            container.appendChild(button);
        });
    }


    function openCase(caseId) {

        if (!isUnlocked(caseId)) {
            return;
        }

        activeCase =
            cases.find(
                (caseData) => caseData.id === caseId
            );

        const completed =
            isComplete(caseId);

        setText(
            "caseEyebrow",
            `Cybersecurity Case ${activeCase.code}`
        );

        setText(
            "caseTitle",
            activeCase.title
        );

        setText(
            "caseSubtitle",
            `Operational Incident Recreation: ${activeCase.analogy}`
        );

        setText(
            "caseSummary",
            activeCase.summary
        );

        setText(
            "caseSeverity",
            activeCase.severity
        );

        renderThreatProfile(
            activeCase.profile
        );

        [
            "briefingTitle",
            "briefingText",
            "simulationText",
            "videoTitle",
            "videoPrompt",
            "videoMeta",
            "decisionTitle",
            "decisionPrompt",
            "analysisThreat",
            "analysisText",
            "physicalComparisonTitle",
            "physicalComparisonText",
            "cyberComparisonTitle",
            "cyberComparisonText",
            "principleTitle",
            "principleText",
            "knowledgeTitle",
            "knowledgePrompt"
        ].forEach((field) => {

            setText(
                field,
                activeCase[field]
            );
        });

        incidentVideo.pause();
        incidentVideo.src = activeCase.video;
        incidentVideo.load();
        incidentVideo.currentTime = 0;

        renderAnswerButtons(
            decisionOptions,
            activeCase.decisionOptions,
            "decision"
        );

        renderAnswerButtons(
            knowledgeOptions,
            activeCase.knowledgeOptions,
            "knowledge"
        );

        decisionFeedback.innerHTML =
            completed
                ? feedbackBox(
                    "Decision verified.",
                    activeCase.decisionCorrect,
                    true
                )
                : "";

        knowledgeFeedback.innerHTML =
            completed
                ? feedbackBox(
                    "Cybersecurity response verified.",
                    activeCase.knowledgeCorrect,
                    true
                )
                : "";

        cyberAnalysis.hidden =
            !completed;

        knowledgeCheck.hidden =
            !completed;

        completeInvestigationBtn.hidden =
            true;

        if (completed) {

            disableButtons(
                decisionOptions
            );

            disableButtons(
                knowledgeOptions
            );
        }

        showScreen("incident");
    }


    function feedbackBox(
        title,
        message,
        correct
    ) {

        return `
            <div class="${
                correct
                    ? "feedback-correct"
                    : "feedback-incorrect"
            }">
                <strong>${title}</strong><br>
                ${message}
            </div>
        `;
    }


    function clearAnswerState(container) {

        container
            .querySelectorAll("button")
            .forEach((button) => {

                button.classList.remove(
                    "correct-answer",
                    "incorrect-answer"
                );
            });
    }


    function disableButtons(container) {

        container
            .querySelectorAll("button")
            .forEach((button) => {

                button.disabled =
                    true;
            });
    }


    function handleAnswer(
        button,
        option,
        answerType
    ) {

        const container =
            answerType === "decision"
                ? decisionOptions
                : knowledgeOptions;

        const feedback =
            answerType === "decision"
                ? decisionFeedback
                : knowledgeFeedback;

        clearAnswerState(
            container
        );

        button.classList.add(
            option.correct
                ? "correct-answer"
                : "incorrect-answer"
        );

        if (!option.correct) {

            feedback.innerHTML =
                feedbackBox(
                    answerType === "decision"
                        ? "Decision not verified."
                        : "Incorrect response.",
                    answerType === "decision"
                        ? activeCase.decisionIncorrect
                        : activeCase.knowledgeIncorrect,
                    false
                );

            return;
        }

        feedback.innerHTML =
            feedbackBox(
                answerType === "decision"
                    ? "Decision verified."
                    : "Cybersecurity response verified.",
                answerType === "decision"
                    ? activeCase.decisionCorrect
                    : activeCase.knowledgeCorrect,
                true
            );

        disableButtons(
            container
        );

        if (answerType === "decision") {

            cyberAnalysis.hidden =
                false;

            knowledgeCheck.hidden =
                false;

            setTimeout(() => {

                cyberAnalysis.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 150);

            return;
        }

        completeInvestigationBtn.hidden =
            false;
    }


    function completeActiveCase() {

        if (!activeCase) {
            return;
        }

        if (!isComplete(activeCase.id)) {

            completedCases.push(
                activeCase.id
            );

            completedCases.sort(
                (a, b) => a - b
            );

            saveProgress();
        }

        updateWelcome();
        renderDashboard();

        if (completedCases.length === cases.length) {

            showScreen("completion");

            return;
        }

        showScreen("dashboard");
    }


    function resetProgress() {

        const confirmed =
            window.confirm(
                "Reset all Project IronGate training progress?"
            );

        if (!confirmed) {
            return;
        }

        completedCases =
            [];

        localStorage.removeItem(
            STORAGE_KEY
        );

        localStorage.removeItem(
            LEARNER_NAME_KEY
        );

        learnerName =
            "";

        if (learnerNameError) {
            learnerNameError.textContent =
                "";
        }

        activeCase =
            null;

        updateLearnerIdentity();
        updateWelcome();
        renderDashboard();
        showScreen("welcome");
    }


    startOrientationBtn.addEventListener(
        "click",
        () => {

            if (!validateAndSaveLearnerName()) {
                return;
            }

            renderDashboard();
            showScreen("dashboard");
        }
    );


    resumeOrientationBtn.addEventListener(
        "click",
        () => {

            if (!learnerName) {

                if (!validateAndSaveLearnerName()) {
                    return;
                }
            }

            openCase(
                getNextIncompleteCase().id
            );
        }
    );


    backToDashboardBtn.addEventListener(
        "click",
        () => {

            renderDashboard();
            showScreen("dashboard");
        }
    );


   async function generateCertificatePDF() {

    const certificate =
        document.getElementById("printCertificate");

    if (!certificate) {
        console.error("Certificate element was not found.");
        return;
    }

    try {

        printCertificateBtn.disabled = true;
        printCertificateBtn.textContent = "Generating PDF...";

        /*
         * Collect the rules currently stored inside @media print.
         * The cloned document will use those same rules as normal
         * screen styles while html2canvas captures the certificate.
         */
        let printRules = "";

        for (const styleSheet of document.styleSheets) {

            try {

                for (const rule of styleSheet.cssRules) {

                    if (
                        rule.type === CSSRule.MEDIA_RULE &&
                        rule.conditionText
                            .toLowerCase()
                            .includes("print")
                    ) {

                        for (const innerRule of rule.cssRules) {
                            printRules += `${innerRule.cssText}\n`;
                        }
                    }
                }

            } catch (error) {

                console.warn(
                    "A stylesheet could not be inspected.",
                    error
                );
            }
        }

        const canvas = await html2canvas(
            certificate,
            {
                scale: 2,
                useCORS: true,
                backgroundColor: "#ffffff",
                width: 1056,
                height: 816,
                windowWidth: 1056,
                windowHeight: 816,

                ignoreElements: (element) =>
                    element.tagName === "VIDEO",

                onclone: (clonedDocument) => {

                    const style =
                        clonedDocument.createElement("style");

                    style.textContent = printRules;

                    clonedDocument.head.appendChild(style);

                    const clonedCertificate =
                        clonedDocument.getElementById(
                            "printCertificate"
                        );

                    clonedDocument
                        .querySelectorAll("video")
                        .forEach((video) => video.remove());

                    if (clonedCertificate) {

                        clonedCertificate.style.setProperty(
                            "display",
                            "block",
                            "important"
                        );

                        clonedCertificate.style.setProperty(
                            "visibility",
                            "visible",
                            "important"
                        );

                        clonedCertificate.style.setProperty(
                            "position",
                            "fixed",
                            "important"
                        );

                        clonedCertificate.style.setProperty(
                            "inset",
                            "0",
                            "important"
                        );

                        clonedCertificate.style.setProperty(
                            "width",
                            "11in",
                            "important"
                        );

                        clonedCertificate.style.setProperty(
                            "height",
                            "8.5in",
                            "important"
                        );

                        clonedCertificate.style.setProperty(
                            "opacity",
                            "1",
                            "important"
                        );
                    }
                }
            }
        );

        const imageData =
            canvas.toDataURL("image/jpeg", 0.98);

        const { jsPDF } = window.jspdf;

        const pdf = new jsPDF({
            orientation: "landscape",
            unit: "in",
            format: "letter"
        });

        pdf.addImage(
            imageData,
            "JPEG",
            0,
            0,
            11,
            8.5,
            undefined,
            "FAST"
        );

        const safeLearnerName =
            (learnerName || "Learner")
                .trim()
                .replace(/[^a-z0-9]+/gi, "_");

        pdf.save(
            `Project_IronGate_Certificate_${safeLearnerName}.pdf`
        );

    } catch (error) {

        console.error(
            "Certificate PDF generation failed:",
            error
        );

        window.alert(
            "The certificate could not be generated. Please try again."
        );

    } finally {

        printCertificateBtn.disabled = false;
        printCertificateBtn.textContent =
            "Download Certificate PDF";
    }
}
    
    completeInvestigationBtn.addEventListener(
        "click",
        completeActiveCase
    );


    reviewCasesBtn.addEventListener(
        "click",
        () => {

            renderDashboard();
            showScreen("dashboard");
        }
    );


    printCertificateBtn.addEventListener(
        "click",
        generateCertificatePDF
    );


    restartOrientationBtn.addEventListener(
        "click",
        resetProgress
    );


    dashboardResetBtn.addEventListener(
        "click",
        resetProgress
    );


    learnerNameInput.addEventListener(
        "keydown",
        (event) => {

            if (event.key !== "Enter") {
                return;
            }

            event.preventDefault();
            startOrientationBtn.click();
        }
    );


    learnerNameInput.addEventListener(
        "input",
        () => {

            if (learnerNameError.textContent) {
                learnerNameError.textContent =
                    "";
            }
        }
    );


    brandHomeLink.addEventListener(
        "click",
        (event) => {

            event.preventDefault();

            updateWelcome();
            showScreen("welcome");
        }
    );


    window.resetIronGateProgress =
        resetProgress;



    const printCompletionDate =
        document.getElementById("printCompletionDate");

    if (printCompletionDate) {
        printCompletionDate.textContent =
            new Intl.DateTimeFormat(
                "en-US",
                {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                }
            ).format(new Date());
    }

    updateLearnerIdentity();
    updateWelcome();
    renderDashboard();
    showScreen("welcome");
});
