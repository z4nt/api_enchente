import bodyParser from 'body-parser';
import express from 'express'
import { Sequelize, DataTypes, INTEGER } from 'sequelize'

const app = express()
app.use(bodyParser.json());
const sequelize = new Sequelize(
    'postgresql://postgres.vxfvuvirxtewiakhlbpd:Supabase4768@aws-0-sa-east-1.pooler.supabase.com:6543/postgres',
    {
      dialect: 'postgres',
      logging: false, 
    }
  );

const Dados = sequelize.define('Dados', {
    nivel_agua: {
        type: DataTypes.FLOAT,  
        allowNull: false,      
      },
      saturacao_solo: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      intensidade_chuva: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      temperatura: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
})

sequelize.sync()

app.post('/ocorrencia', async (req,res) => {
    try{
    await Dados.create(req.body)
    res.status(200).send('Dados enviados com sucesso')
    }catch(error){
        console.log('erro ao enviar dados', error)
        res.status(500).send('erro ao enviar dados', error)
    }
})

app.listen(10000, () =>{
    console.log('Servidor inciado na porta 10000')
})