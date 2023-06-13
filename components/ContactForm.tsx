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
  email: z.string().nonempty('Email is required').email('Invalid email'),
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
    <form className='w-full max-w-[700px] bg-[#f0f0f0] p-10 gap-4 shadow-[inset_12px_64px_128px_12px_rgb(0,0,0,0.05)] flex flex-col items-center rounded-xl' onSubmit={handleSubmit(onSubmit)}>
      <div className='w-full max-w-[500px] min-w-[300px] flex flex-col'>
        <label className='text-xl ' htmlFor="name">Name <span className='text-red-400'>*</span></label>
        <input className='text-lg rounded-xl px-1 py-2 shadow-inner' type="text" id="name" {...register('name')} />
        {errors.name && <span className='text-red-400'>{errors.name.message}</span>}
      </div>
      <div className='w-full max-w-[500px] min-w-[300px] flex flex-col'>
        <label className='text-xl ' htmlFor="email">Email <span className='text-red-400'>*</span></label>
        <input className='text-lg rounded-xl px-1 py-2 shadow-inner' type="text" id="email" {...register('email')} />
        {errors.email && <span className='text-red-400'>{errors.email.message}</span>}
      </div>
      <div className='w-full max-w-[500px] min-w-[300px] flex flex-col'>
        <label className='text-xl ' htmlFor="inquiry">Question/Inquiry <span className='text-red-400'>*</span></label>
        <textarea className='text-lg rounded-xl px-1 py-2 shadow-inner' id="inquiry" {...register('inquiry')} />
        {errors.inquiry && <span className='text-red-400'>{errors.inquiry.message}</span>}
      </div>
      <button className='hover:opacity-80 w-max px-4 py-2 bg-[#3772FF] text-[#f0f0f0] shadow-lg rounded-t-2xl rounded-b-2xl rounded-l-sm rounded-r-sm' type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
