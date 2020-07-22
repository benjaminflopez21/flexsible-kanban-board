import * as Yup from 'yup';

export default Yup.object().shape({
    title: Yup.string()
      .min(4, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Field Required'),
    description: Yup.string()
      .max(500, 'Too Long!')
      .required('Field Required'),
    tag: Yup.string().required('Field Required').nullable(),
    assignee: Yup.string(),
    dueDate: Yup.date(),
  });