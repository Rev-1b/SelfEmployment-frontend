import { createRoot } from 'react-dom/client';
import Notification from '../components/Notification/Notification';

class NotificationService {
    private container: HTMLDivElement | null = null;
    private root: any = null;
    private isNotificationShown = false;

    constructor() {
        this.initialize();
    }

    private initialize() {
        this.container = document.createElement('div');
        document.body.appendChild(this.container);
        this.root = createRoot(this.container);
    }

    show(message: string, severity: 'success' | 'info' | 'warning' | 'error' = 'info') {
        if (this.isNotificationShown) return;
        this.isNotificationShown = true;

        this.root.render(
            <Notification
                open={ true}
                message = { message }
                severity = { severity }
                onClose = {() => {
            this.isNotificationShown = false;
            this.root.render(null);
        }}
            />
        );
    }

close() {
    if (this.isNotificationShown) {
        this.isNotificationShown = false;
        this.root.render(null);
    }
}
}

export const notificationService = new NotificationService(); 