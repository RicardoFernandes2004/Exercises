import { db } from "../db.js"; 

 

export const getUsers = (_, res) => { 
	const q = "SELECT * FROM agenda ORDER BY nome"; 
	db.query(q, (err, data) => { 
	if (err) return res.json(err); 
	return res.status(200).json(data); 
}); 

}; 

 

export const addUser = (req, res) => { 
    const q = "INSERT INTO agenda (`nome`, `telefone`,`email`,`endereco`,`instagram`) VALUES(?)"; 

    const values = [ 
        req.body.nome, 
        req.body.telefone, 
        req.body.email,
        req.body.endereco,
        req.body.instagram
    ]; 
    db.query(q, [values], (err) => { 
    if (err) return res.json(err); 
    
    return res.status(200).json("Registro criado com sucesso"); 
    }); 
    
}; 
    
     
    
    export const updateUser = (req, res) => { 
    
    const q = "UPDATE agenda SET `nome` = ?, `telefone` = ?,`email` = ?, `endereco` = ?, `instagram` = ? WHERE `id` = ?"; 
    const values = [ 
    req.body.nome, 
    req.body.telefone,
    req.body.email,
    req.body.endereco,
    req.body.instagram 
    ]; 
    
     
    
    db.query(q, [...values, req.params.id], (err) => { 
    if (err) return res.jason(err);     
    return res.status(200).json("Registro atualizado com sucesso"); 
    }); 
    
}; 
    
     
    
    export const deleteUser = (req, res) => { 
    const q = "DELETE FROM agenda WHERE `id` = ?"; 
    db.query(q, [req.params.id], (err) => { 
    if (err) return res.json(err); 
    return res.status(200).json("Registro deletado com sucesso"); 
    }); 
    
}; 