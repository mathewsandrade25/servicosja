import { useState, useEffect } from 'react';
import { Dialog } from '@mui/material';
import styles from './EditProviderModal.module.css';
import ProviderServices from '../../services/provider';
import UserServices from '../../services/user';

export default function EditProviderModal({ open, close, providerData, onUpdate }) {
    const [formData, setFormData] = useState({
        nome_completo: '',
        telefone_publico: '',
        biografia: '',
        disponibilidade: '',
        atende_fim_de_semana: '',
        possui_material_proprio: '',
        cep: '',
        rua: '',
        numero_casa: ''
    });

    useEffect(() => {
        if (providerData) {
            setFormData({
                nome_completo: providerData.nome || '',
                telefone_publico: providerData.telefone_publico || '',
                biografia: providerData.biografia || '',
                disponibilidade: providerData.disponibilidade !== undefined ? String(providerData.disponibilidade) : '',
                atende_fim_de_semana: providerData.atende_fim_de_semana !== undefined ? String(providerData.atende_fim_de_semana) : '',
                possui_material_proprio: providerData.possui_material_proprio !== undefined ? String(providerData.possui_material_proprio) : '',
                cep: providerData.cep || '',
                rua: providerData.rua || '',
                numero_casa: providerData.numero_casa || ''
            });
        }
    }, [providerData]);
    
    // const { updateProvider } = ProviderServices(); // Not used anymore if we use updateUser for everything
    const { updateUser } = UserServices();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                nome_completo: formData.nome_completo,
                perfil_prestador: {
                    telefone_publico: formData.telefone_publico,
                    biografia: formData.biografia,
                    disponibilidade: formData.disponibilidade === 'true' || formData.disponibilidade === true,
                    atende_fim_de_semana: formData.atende_fim_de_semana === 'true' || formData.atende_fim_de_semana === true,
                    possui_material_proprio: formData.possui_material_proprio === 'true' || formData.possui_material_proprio === true,
                    cep: formData.cep,
                    rua: formData.rua,
                    numero_casa: formData.numero_casa
                }
            };

            await updateUser(payload);
            
            if (onUpdate) onUpdate();
            close();
        } catch (error) {
            console.error("Failed to update profile", error);
            alert("Erro ao atualizar perfil. Verifique os dados.");
        }
    };

    return (
        <Dialog open={open} onClose={close}>
            <div className={styles.modalContent}>
                <h2>Editar Perfil</h2>
                <form onSubmit={handleSubmit}>
                    <label>Nome:</label>
                    <input name="nome_completo" value={formData.nome_completo} onChange={handleChange} placeholder="Nome" />
                    
                    <label>Telefone Público:</label>
                    <input name="telefone_publico" value={formData.telefone_publico} onChange={handleChange} placeholder="Telefone" />
                    
                    <label>Disponibilidade 24h:</label>
                    <select name="disponibilidade" value={formData.disponibilidade} onChange={handleChange}>
                        <option value="" disabled>Selecione</option>
                        <option value="true">Sim</option>
                        <option value="false">Não</option>
                    </select>

                    <label>Atende Final de Semana:</label>
                    <select name="atende_fim_de_semana" value={formData.atende_fim_de_semana} onChange={handleChange}>
                        <option value="" disabled>Selecione</option>
                        <option value="true">Sim</option>
                        <option value="false">Não</option>
                    </select>

                    <label>Possui Material Próprio:</label>
                    <select name="possui_material_proprio" value={formData.possui_material_proprio} onChange={handleChange}>
                        <option value="" disabled>Selecione</option>
                        <option value="true">Sim</option>
                        <option value="false">Não</option>
                    </select>

                    <label>CEP:</label>
                    <input name="cep" value={formData.cep} onChange={handleChange} placeholder="CEP" />

                    <label>Rua:</label>
                    <input name="rua" value={formData.rua} onChange={handleChange} placeholder="Rua" />

                    <label>Número:</label>
                    <input name="numero_casa" value={formData.numero_casa} onChange={handleChange} placeholder="Número" />

                    <label>Biografia:</label>
                    <textarea name="biografia" value={formData.biografia} onChange={handleChange} placeholder="Biografia" />
                    
                    <button type="submit">Salvar</button>
                </form>
            </div>
        </Dialog>
    );
}
