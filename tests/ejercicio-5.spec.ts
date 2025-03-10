import { describe, it, expect, vi } from "vitest";
import { 
  EmailServiceCorrected, 
  ShortMessageServiceCorrected, 
  WhatsAppServiceCorrected, 
  NotifierCorrected 
} from "../src/ejercicio-5/EmailCorregido";

describe("EmailServiceCorrected", () => {
  it("Debe enviar una notificación por email", () => {
    const consoleSpy = vi.spyOn(console, "log");
    const emailService = new EmailServiceCorrected();

    emailService.notify("Test Message");

    expect(consoleSpy).toHaveBeenCalledWith("Sending notification by email: Test Message");
  });
});

describe("ShortMessageServiceCorrected", () => {
  it("Debe enviar una notificación por SMS", () => {
    const consoleSpy = vi.spyOn(console, "log");
    const smsService = new ShortMessageServiceCorrected();

    smsService.notify("Test Message");

    expect(consoleSpy).toHaveBeenCalledWith("Sending notification by SMS: Test Message");
  });
});

describe("WhatsAppServiceCorrected", () => {
  it("Debe enviar una notificación por WhatsApp", () => {
    const consoleSpy = vi.spyOn(console, "log");
    const whatsappService = new WhatsAppServiceCorrected();

    whatsappService.notify("Test Message");

    expect(consoleSpy).toHaveBeenCalledWith("Sending notification by WhatsApp: Test Message");
  });
});

describe("NotifierCorrected", () => {
  it("Debe enviar una notificación usando el servicio de Email", () => {
    const emailServiceMock = new EmailServiceCorrected();
    const emailSpy = vi.spyOn(emailServiceMock, "notify");

    const notifier = new NotifierCorrected(emailServiceMock);
    notifier.sendNotification("Test Email Notification");

    expect(emailSpy).toHaveBeenCalledWith("Test Email Notification");
  });

  it("Debe enviar una notificación usando el servicio de SMS", () => {
    const smsServiceMock = new ShortMessageServiceCorrected();
    const smsSpy = vi.spyOn(smsServiceMock, "notify");

    const notifier = new NotifierCorrected(smsServiceMock);
    notifier.sendNotification("Test SMS Notification");

    expect(smsSpy).toHaveBeenCalledWith("Test SMS Notification");
  });

  it("Debe enviar una notificación usando el servicio de WhatsApp", () => {
    const whatsappServiceMock = new WhatsAppServiceCorrected();
    const whatsappSpy = vi.spyOn(whatsappServiceMock, "notify");

    const notifier = new NotifierCorrected(whatsappServiceMock);
    notifier.sendNotification("Test WhatsApp Notification");

    expect(whatsappSpy).toHaveBeenCalledWith("Test WhatsApp Notification");
  });
});
