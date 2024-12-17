import nodemailer from 'nodemailer';

const emailRegistro = async (datos) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const { email, nombre, token } = datos;

  // Enviar el email
  await transport.sendMail({
    from: 'BienesRaices.com',
    to: email,
    subject: 'Confirma tu cuenta en BienesRaices.com',
    text: 'Confirma tu cuenta en BienesRaices.com',
    html: `
      <header style="font-family: Arial, sans-serif; text-align: center; line-height: 1.2; background-color: skyBlue; padding: 20px; border-radius: 8px;">
        <h1 style="font-weight: bold; color: black;">Bienes Raíces</h1>
        <h2 style="color: vibrantYellow;">Confirmación de cuenta</h2>
    </header>
    <div style="padding: 20px 0;">
                        <h2 style="font-size: 20px; color: #333; font-weight: 600; text-align: center;">¡Hola, ${nombre}!</h2>
                        <p style="font-size: 16px; color: #555; text-align: center; margin-top: 20px;">
                            ¡Gracias por registrarte en nuestra plataforma de Bienes Raíces! Estamos emocionados de tenerte con nosotros.
                        </p>
                        <p style="font-size: 16px; color: #555; text-align: center; margin-top: 10px;">
                            Estás a solo un paso de completar tu registro y comenzar a explorar todas las propiedades disponibles en nuestra plataforma.
                        </p>
                        <p style="font-size: 16px; color: #555; text-align: center; margin-top: 10px;">
                            En Bienes Raíces, nos esforzamos por ofrecerte las mejores opciones para comprar, vender y alquilar propiedades. Ya sea que estés buscando tu primera casa, un lugar para invertir o simplemente explorar el mercado, estamos aquí para ayudarte.
                        </p>
                        <p style="font-size: 16px; color: #555; text-align: center; margin-top: 10px;">
                            Haz clic en el botón a continuación para confirmar tu cuenta y comenzar a descubrir todo lo que nuestra plataforma tiene para ofrecerte.
                        </p>
                        <div style="font-family: Arial, sans-serif; text-align: justify; line-height: 1.6; color: #black; background-color: palePurple; padding: 25px; border: 1px solid winkle; border-radius: 8px;">
        <h2>Hola, <span style="color: reds;">${nombre}</span></h2>
        <p style="font-size: 18px; color: black;">
            Bienvenido a la plataforma de BienesRaíces, el sitio seguro donde podrás buscar, comprar y ofertar propiedades a través de internet.
        </p>
        <div style="text-align: center; background: #green; border: 1px solid black; padding: 15px; border-radius: 5px;">
            <p style="font-size: 20px; color: black;">
                Haz clic en el botón de abajo para confirmar tu cuenta:
            </p>
            <div style="text-align: center; margin: 20px 0;">
              <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/confirmar/${token}"
                 style="background-color: green; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-size: 16px;">
                   Confirmar Cuenta
                </a>
            <<br>
        <!-- Mensaje secundario -->
                        <p style="font-size: 14px; color: #090809; text-align: center; margin-top: 25px;">
                            Si no has creado esta cuenta, simplemente ignora este mensaje.
                        </p>
                    </div>

                    <!-- Firma -->
                    <footer style="text-align: center; padding-top: 20px; border-top: 1px solid #eee; font-size: 14px; color: #888;">
                        <p style="margin: 0;">Atentamente,</p>
                        <p style="font-weight: 600; color: #2c3e50;">Brian Jesus Mendoza Marquez</p>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCkXjwXA9XxuYIJCzKa4K9b9IuiXzSj61w7atjhcRRWIeaiXEAVxr1L1p8_vBKsz1emw&usqp=CAU" 
                             alt="Firma" style="max-width: 150px; height: auto; border-radius: 5px; margin: 10px 0;">
                        <p style="margin-top: 10px; color: #aaa;">© 2023 Bienes Raíces. Todos los derechos reservados.</p>
                    </footer>
    `
  });
};

const emailOlvidePassword = async (datos) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const { email, nombre, token } = datos;

  // Enviar el email
  await transport.sendMail({
    from: 'BienesRaices.com',
    to: email,
    subject: 'Restablece tu password en BienesRaices.com',
    text: 'Restablece tu password en BienesRaices.com',
    html: `
      <!-- Encabezado -->
                <header style="text-align: center; padding-bottom: 20px;">
                    <h1 style="font-size: 24px; font-weight: 600; color: #3498db;">Bienes Raíces</h1>
                    <p style="font-size: 16px; color: #888; margin: 0;">Recuperación de contraseña</p>
                </header>

                <!-- Contenido principal -->
                <div style="padding: 20px 0;">
                    <h2 style="font-size: 20px; color: #333; font-weight: 600; text-align: center;">Estimado/a ${nombre},</h2>
                    <p style="font-size: 16px; color: #555; text-align: center; margin-top: 20px;">
                        Hemos recibido una solicitud para restablecer la contraseña de su cuenta en Bienes Raíces.
                        Si no realizó esta solicitud, puede ignorar este correo electrónico.
                    </p>
                    <p style="font-size: 16px; color: #555; text-align: center; margin-top: 10px;">
                        Si desea continuar con el proceso de restablecimiento, haga clic en el botón a continuación. Este enlace estará disponible por tiempo limitado.
                    </p>

            <div style="text-align: center; margin: 20px 0;">
              <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/olvide-password/${token}"
                  style="background-color: green; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-size: 16px;">
                       Confirmar Cuenta
                    </a>
                </div>
            <!-- Mensaje secundario -->
                    <p style="font-size: 14px; color: #090809; text-align: center; margin-top: 25px;">
                        Si tiene alguna pregunta o necesita ayuda, no dude en contactarnos.
                    </p>
                </div>

                <!-- Firma -->
                <!-- Firma -->
                    <footer style="text-align: center; padding-top: 20px; border-top: 1px solid #eee; font-size: 14px; color: #888;">
                        <p style="margin: 0;">Atentamente,</p>
                        <p style="font-weight: 600; color: #2c3e50;">Brian Jesus Mendoza Marquez</p>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCkXjwXA9XxuYIJCzKa4K9b9IuiXzSj61w7atjhcRRWIeaiXEAVxr1L1p8_vBKsz1emw&usqp=CAU" 
                             alt="Firma" style="max-width: 150px; height: auto; border-radius: 5px; margin: 10px 0;">
                        <p style="margin-top: 10px; color: #aaa;">© 2023 Bienes Raíces. Todos los derechos reservados.</p>
                        <br>
                    <p style="margin: 0;">Atentamente,</p>
                    <p style="font-weight: 600; color: #2c3e50;">Equipo de Bienes Raíces</p>
                    <p style="margin-top: 10px; color: #aaa;">© 2023 Bienes Raíces. Todos los derechos reservados.</p>
                </footer>
    `
  });
};

export { emailRegistro, emailOlvidePassword };
