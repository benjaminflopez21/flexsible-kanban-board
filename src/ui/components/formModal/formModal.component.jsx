/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types';
import Modal from '../../components/modal/modal.component';
import Style from './formModal.style';
import ValidateSchema from './formModal.validate';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";


const FormModal = (props) => {
    const {
        model,
        show,
        onClose,
        onSave,
    } = props;

    return <Modal title="Delete Card" 
    show={!!model || show}
    onClose={onClose}>
        <div>
            <div css={Style.content}>
                <Formik initialValues={
                    model 
                    ? model.toJson() 
                    : {
                        id: '',
                        title: '',
                        description: '',
                        tag: '',
                        assignee: '',
                        dueDate: null
                    }}
                    validationSchema={ValidateSchema}
                      onSubmit={(values, { setSubmitting }) => {

                      }}
                    >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        setFieldValue
                    }) => (
                     <Form>
                        <Field css={Style.field} type="text" name="title" placeholder="Title"/>
                        <ErrorMessage css={Style.errorMessage} name="title" component="div" />
                        <Field css={Style.field} type="text" as="textarea" name="description" placeholder="Description" />
                        <ErrorMessage css={Style.errorMessage} name="description" component="div" />
                        <div css={Style.row}>
                            <div>
                                <Field css={Style.field} as="select" name="tag" placeholder="Tag">
                                    <option>Select a tag</option>
                                    <option value="SEO">SEO</option>
                                    <option value="Long Form">Long Form</option>
                                    <option value="Blog Post">Blog Post</option>
                                </Field>
                                <ErrorMessage css={Style.errorMessage} name="tag" component="div"/>
                            </div>
                            <div>
                                <Field css={Style.field} type="text" name="assignee" placeholder="Assignee"/>
                                <ErrorMessage css={Style.errorMessage} name="assignee" component="div" />
                            </div>
                        </div>
                        <DatePicker 
                            placeholderText="Due date"
                            css={Style.field}
                            selected={values.dueDate}
                            dateFormat="MMMM d, yyyy"
                            name="dueDate"
                            onChange={date => setFieldValue('dueDate', date)}
                        />

                        <div css={Style.buttons}>
                            <div css={Style.cancelButton} onClick={onClose}>Cancel</div>
                            <div css={Style.saveButton} onClick={handleSubmit}>Save</div>
                        </div>
                      </Form>
                    )}

                </Formik>
            </div>

        </div>
    </Modal>;
};

FormModal.propTypes = {
    model: PropTypes.objectOf(PropTypes.any),
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
};

export default FormModal;
