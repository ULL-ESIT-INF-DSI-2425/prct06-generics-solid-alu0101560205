// Interfaz para cualquier servicio de notificación
interface NotificationService {
  notify(message: string): void;
}

// Implementación de la notificación por email
class EmailServiceCorrected implements NotificationService {
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}

// Implementación de la notificación por SMS
class ShortMessageServiceCorrected implements NotificationService {
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}

// Implementación de la notificación por WhatsApp
class WhatsAppServiceCorrected implements NotificationService {
  notify(message: string): void {
    console.log(`Sending notification by WhatsApp: ${message}`);
  }
}

// Notificador ahora depende de una abstracción (interface), no de clases concretas
class NotifierCorrected {
  constructor(private notificationService: NotificationService) {}

  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}

// Client code
const emailNotifier_ = new NotifierCorrected(new EmailServiceCorrected());
emailNotifier.sendNotification("Hello World!");

const smsNotifier = new NotifierCorrected(new ShortMessageServiceCorrected());
smsNotifier.sendNotification("Hello World!");

const whatsappNotifier = new NotifierCorrected(new WhatsAppServiceCorrected());
whatsappNotifier.sendNotification("Hello World!");
