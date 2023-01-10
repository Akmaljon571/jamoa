import { fetchData } from '../../utils/postgres.js';

const ALL_PRODUCTS = `
    select * from company
`;

const NEW_PRODUCTS = `
    insert into company() values ()
`;
export const UPDATE_PRODUCTS = `
    UPDATE company SET  2 WHERE product_id =  RETURNING *
`;

const DELETE_PRODUCTS = `
    DELETE FROM company where company_id = $1`;

export const allProducts = () => fetchData(ALL_PRODUCTS);

export const createProduct = () => fetchData(NEW_PRODUCTS);

export const updateCompany = async (id) => {
	const [oldCompany] = await fetchData(`SELECT * FROM company where`, id);

	console.log(oldCompany);

	await fetchData(UPDATE_PRODUCTS, name ? name : oldCompany.company_name, img ? img : oldCompany.company_img, id);
};

export const deleteProduct = async (id) => {
	await fetchData(DELETE_PRODUCTS, id);
};
