module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'root',
    database: 'sqlnode',
    define: {
        timestamps: true, //cria nas tabelas, as colunas created_at e updated_at
        underscored: true, //define o padrão snake case para os nomes das tabelas e colunas
    },
};