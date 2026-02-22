// Utility functions

/**
 * Generates a configuration object based on the provided options.
 * @param {Object} options - Options to generate config.
 * @returns {Object} Generated config.
 */
function generateConfig(options) {
    // Implement the logic to generate config
    return {
        ...options,
    };
}

/**
 * Formats a given date to 'YYYY-MM-DD' format.
 * @param {Date} date - Date object to format.
 * @returns {string} Formatted date.
 */
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

/**
 * Calculates the number of days left from today until the given date.
 * @param {Date} targetDate - The date to count down to.
 * @returns {number} Days left until the target date.
 */
function calculateDaysLeft(targetDate) {
    const today = new Date();
    const timeDiff = targetDate - today;
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
}

/**
 * Detects the platform (e.g., iOS, Android, Web) the application is running on.
 * @returns {string} Detected platform.
 */
function detectPlatform() {
    const userAgent = navigator.userAgent;
    if (/android/i.test(userAgent)) return 'Android';
    if (/iPad|iPhone|iPod/.test(userAgent)) return 'iOS';
    return 'Web';
}

/**
 * Copies the given text to the clipboard.
 * @param {string} text - Text to copy.
 */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Text copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

/**
 * Downloads a QR code image.
 * @param {string} data - Data to encode in the QR code.
 */
function downloadQRCode(data) {
    const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(data)}`;
    const link = document.createElement('a');
    link.href = qrCodeURL;
    link.download = 'qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/**
 * Displays a toast notification.
 * @param {string} message - The message to display.
 */
function toast(message) {
    const toastElement = document.createElement('div');
    toastElement.innerText = message;
    toastElement.className = 'toast';
    document.body.appendChild(toastElement);
    setTimeout(() => {
        document.body.removeChild(toastElement);
    }, 3000);
}

// Export all functions
export {
    generateConfig,
    formatDate,
    calculateDaysLeft,
    detectPlatform,
    copyToClipboard,
    downloadQRCode,
    toast
};