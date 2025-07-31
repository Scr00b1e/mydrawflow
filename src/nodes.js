export default class nodes {
    constructor(container) {
        this.container = container;
        this.log = log;

        function saveLogToFile() {
            const logData = editor.export();
            const blob = new Blob([logData], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = 'drawflow-log.json';
            document.body.appendChild(a);
            a.click();
            
            // Clean up
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }
    }
}