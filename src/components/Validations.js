import * as yup from 'yup';

const validations = yup.object().shape({
	name: yup.string().required()
});

export default validations;