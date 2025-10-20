import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

const USER = {
    email: 'andyrojop@gmail.com',
    password: '123456',
};

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (email === USER.email && password === USER.password) {
        const fakeToken = "abc123xyz";
        return res.json({
            success: true,
            message: "Login exitoso",
            token: fakeToken
        });
    }
    res.status(401).json({
        success: false,
        message: "Credenciales inválidas"
    });
    
});

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});