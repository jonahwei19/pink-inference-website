import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type FormValues = {
  name: string;
  email: string;
  inquiry: string;
};

const schema = z.object({
  name: z.string().nonempty('Name is required'),
  email: z.string().email('Invalid email').nonempty('Email is required'),
  inquiry: z.string().nonempty('Inquiry is required'),
});

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    // Perform further actions such as sending the form data to a server
  };

  return (
    <form className='w-full max-w-[600px] p-10 gap-4 bg-gradient-to-bl to-slate-700 from-slate-400 shadow-xl flex flex-col items-center rounded-xl' onSubmit={handleSubmit(onSubmit)}>
      <div className='w-full max-w-[500px] min-w-[300px] flex flex-col'>
        <label className='text-xl text-white' htmlFor="name">Name:</label>
        <input className='bg-gradient-to-b from-slate-700 to-slate-500 rounded-xl px-1 py-2 shadow-inner text-white' type="text" id="name" {...register('name')} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div className='w-full max-w-[500px] min-w-[300px] flex flex-col'>
        <label className='text-xl text-white' htmlFor="email">Email:</label>
        <input className='bg-gradient-to-b from-slate-700 to-slate-500 rounded-xl px-1 py-2 shadow-inner text-white' type="text" id="email" {...register('email')} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div className='w-full max-w-[500px] min-w-[300px] flex flex-col'>
        <label className='text-xl text-white' htmlFor="inquiry">Question/Inquiry:</label>
        <textarea className='bg-gradient-to-b from-slate-700 to-slate-500 rounded-xl px-1 py-2 shadow-inner text-white' id="inquiry" {...register('inquiry')} />
        {errors.inquiry && <span>{errors.inquiry.message}</span>}
      </div>
      <button className='hover:opacity-80 w-max px-4 py-2 text-black bg-gradient-to-br from-[#f0f0f0] to-[#ffffff] shadow-lg rounded-t-2xl rounded-b-2xl rounded-l-sm rounded-r-sm' type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
