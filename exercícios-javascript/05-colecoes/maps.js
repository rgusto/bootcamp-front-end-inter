function getAdmins(map) {
    let admins = [];
    for (const [key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Fulano','Admin');
usuarios.set('Cicrano','Admin');
usuarios.set('Beltrano','User');
usuarios.set('Maria','Admin');

console.log(getAdmins(usuarios));