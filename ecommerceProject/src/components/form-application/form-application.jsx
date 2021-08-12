import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useTranslation } from 'react-i18next';
import './form-application.css';

const FormApplication = () => {
   const validateForm = values => {
      const errors = {};

      if (!values.firstName) {
         errors.firstName = t('errors.firstName');
      } else if (values.firstName.length > 15) {
         errors.firstName = t('errors.firstName1');
      }

      if (!values.lastName) {
         errors.lastName = t('errors.lastName');
      } else if (values.lastName.length > 15) {
         errors.lastName = t('errors.lastName1');
      }

      if (!values.email) {
         errors.email = t('errors.email');
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
         errors.email = t('errors.email1');
      }

      if (!values.subject) {
         errors.telephone = t('errors.telephone');
      }

      if (!values.content) {
         errors.content = t('errors.content');
      }

      return errors;
   };
   const { t } = useTranslation();
   return (
      <div id="form-application">
         <h1 className="form-application__title">{t('requestQuote')}</h1>
         <Formik
            className=""
            initialValues={{ firstName: '', lastName: '', email: '', telephone: '', content: '' }}
            onSubmit={(values, { setSubmitting }) => {
               setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
               }, 1000);
            }}
            validate={validateForm}

         >
            {(formik, isSubmitting) => (
               <Form className="form-application__container">
                  <div className="row">
                     <div className="form-group mt-5 mb-5 col-5">
                        <label htmlFor="firstName">{t('name')}</label>
                        <Field name="firstName" className={(formik.touched.firstName && formik.errors.firstName) ? 'form-control is-invalid' : 'form-control'} type="text" />

                        {formik.touched.firstName && formik.errors.firstName
                           ? (
                              <div className="invalid-feedback">{formik.errors.firstName}</div>
                           )
                           : null}
                     </div>
                     <div className="form-group mt-5 mb-5 col-5">
                        <label htmlFor="lastName">{t('lastName')}</label>
                        <Field name="lastName" className={(formik.touched.lastName && formik.errors.lastName) ? 'form-control is-invalid' : 'form-control'} type="text" />

                        {formik.touched.lastName && formik.errors.lastName
                           ? (
                              <div className="invalid-feedback">{formik.errors.lastName}</div>
                           )
                           : null}
                     </div>
                  </div>
                  <div className="row">
                     <div className="form-group mb-5 col-5">
                        <label htmlFor="email">{t('email')}</label>
                        <Field name="email" className={(formik.touched.email && formik.errors.email) ? 'form-control is-invalid' : 'form-control'} type="email" />

                        {formik.touched.email && formik.errors.email
                           ? (
                              <div className="invalid-feedback">{t('errors.email')}</div>
                           )
                           : null}
                     </div>
                     <div className="form-group mb-5 col-5">
                        <label htmlFor="telephone">{t('telephone')}</label>
                        <Field name="telephone" className={(formik.touched.telephone && formik.errors.telephone) ? 'form-control is-invalid' : 'form-control'} type="number" />

                        {formik.touched.telephone && formik.errors.telephone
                           ? (
                              <div className="invalid-feedback">{formik.errors.telephone}</div>
                           )
                           : null}
                     </div>
                  </div>
                  <div className="row">
                     <div className="form-group mb-5 col-10">
                        <label htmlFor="content">{t('content')}</label>
                        <Field name="content" as="textarea" className={(formik.touched.content && formik.errors.content) ? 'form-control is-invalid' : 'form-control'} type="text" />

                        {formik.touched.content && formik.errors.content
                           ? (
                              <div className="invalid-feedback">{formik.errors.content}</div>
                           )
                           : null}
                     </div>
                  </div>
                  <div className="form-application__submit">
                     <button type="submit" className="btn btn-outlined btn-primary" disabled={isSubmitting}>{isSubmitting ? t('wait') : t('submit')}</button>
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   );
};

export default FormApplication;
