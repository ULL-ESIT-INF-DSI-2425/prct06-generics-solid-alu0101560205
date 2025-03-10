// Interfaz para cualquier servicio de notificación
export interface NotificationService {
  notify(message: string): void;
}

// Implementación de la notificación por email
export class EmailServiceCorrected implements NotificationService {
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}

// Implementación de la notificación por SMS
export class ShortMessageServiceCorrected implements NotificationService {
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}

// Implementación de la notificación por WhatsApp
export class WhatsAppServiceCorrected implements NotificationService {
  notify(message: string): void {
    console.log(`Sending notification by WhatsApp: ${message}`);
  }
}

// Notificador ahora depende de una abstracción (interface), no de clases concretas
export class NotifierCorrected {
  constructor(private notificationService: NotificationService) {}

  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}

// Client code
const emailNotifier_ = new NotifierCorrected(new EmailServiceCorrected());
emailNotifier_.sendNotification("Hello World!");

const smsNotifier_ = new NotifierCorrected(new ShortMessageServiceCorrected());
smsNotifier_.sendNotification("Hello World!");

const whatsappNotifier_ = new NotifierCorrected(new WhatsAppServiceCorrected());
whatsappNotifier_.sendNotification("Hello World!");
