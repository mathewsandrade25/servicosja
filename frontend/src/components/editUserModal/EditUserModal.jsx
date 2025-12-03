import { useState, useEffect } from 'react';
import { Dialog } from '@mui/material';
import styles from './EditUserModal.module.css';
import UserServices from '../../services/user';

export default function EditUserModal({ open, close, userData, onUpdate }) {
    const [formData, setFormData] = useState({
        nome_completo: '',
        dt_nascimento: '',
        rua: '',
        numero_casa: '',
        cep: '',
        telefone_contato: ''
    });

    useEffect(() => {
        if (userData) {
            setFormData({
                nome_completo: userData.nome_completo || '', 
                dt_nascimento: userData.dt_nascimento || userData.perfil_cliente?.dt_nascimento || '',
                rua: userData.perfil_cliente?.rua || userData.rua || '',
                numero_casa: userData.perfil_cliente?.numero_casa || userData.numero_casa || '',
                cep: userData.perfil_cliente?.cep || userData.cep || '',
                telefone_contato: userData.perfil_cliente?.telefone_contato || userData.telefone_contato || ''
            });
        }
    }, [userData]);
    
    const { updateUser } = UserServices();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                nome_completo: formData.nome_completo,
                dt_nascimento: formData.dt_nascimento,
                perfil_cliente: {
                    telefone_contato: formData.telefone_contato,
                    rua: formData.rua,
                    numero_casa: formData.numero_casa,
                    cep: formData.cep
                }
            };

            await updateUser(payload);
            if (onUpdate) onUpdate();
            close();
        } catch (error) {
            console.error("Failed to update user profile", error);
            alert("Erro ao atualizar perfil. Tente novamente.");
        }
    };

    return (
        <Dialog open={open} onClose={close}>
            <div className={styles.modalContent}>
                <h2>Editar Perfil</h2>
                <form onSubmit={handleSubmit}>
                    <label>Nome Completo:</label>
                    <input name="nome_completo" value={formData.nome_completo} onChange={handleChange} placeholder="Nome Completo" />
                    
                    <label>Data de Nascimento:</label>
                    <input name="dt_nascimento" value={formData.dt_nascimento} onChange={handleChange} placeholder="Data de Nascimento" />

                    <label>Rua:</label>
                    <input name="rua" value={formData.rua} onChange={handleChange} placeholder="Rua" />

                    <label>Número:</label>
                    <input name="numero_casa" value={formData.numero_casa} onChange={handleChange} placeholder="Número" />

                    <label>CEP:</label>
                    <input name="cep" value={formData.cep} onChange={handleChange} placeholder="CEP" />

                    <label>Telefone de Contato:</label>
                    <input name="telefone_contato" value={formData.telefone_contato} onChange={handleChange} placeholder="Telefone" />

                    <button type="submit">Salvar</button>
                </form>
            </div>
        </Dialog>
    );
}
