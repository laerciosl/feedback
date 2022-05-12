import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "a805ce93865765",
    pass: "021b76fdc58e0d"
  }
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail ({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <contato@feedget.com>',
      to: 'Laércio Silva <laercio.sl@hotmail.com>',
      subject,
      html: body,
    })
  };
}