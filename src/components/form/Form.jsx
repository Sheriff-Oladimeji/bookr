import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-10 w-[90%] md:w-[50%] mx-auto flex flex-col space-y-6 mb-8"
        
    >
      <div className="flex items-center gap-4 flex-col md:flex-row w-full mt-0">
        <div className="w-full flex-col h-[56px] mb-4">
          <input
            {...register("fullName", { required: true })}
            aria-invalid={errors.fullName ? "true" : "false"}
            className="input"
            placeholder="Full Name*"
          />

          {errors.fullName?.type === "required" && (
            <p role="alert" className="text-red-500">
              Full name is required
            </p>
          )}
        </div>

        <div className="w-full flex-col h-[56px] mb-4">
          <input
            {...register("mail", { required: "Email Address is required" })}
            aria-invalid={errors.mail ? "true" : "false"}
            className="input"
            placeholder="Email*"
          />
          {errors.mail && (
            <p role="alert" className="text-red-500">
              {errors.mail?.message}
            </p>
          )}
        </div>
      </div>
      <div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="6"
          className="bg-[#F2F2F2] w-full placeholder:p-4 px-3 outline-none rounded-md"
          placeholder="Message*"
        ></textarea>
      </div>
      <input
        type="submit"
        className="bg-brown text-white p-3 font-bold rounded-md md:w-[200px] cursor-pointer"
      />
    </form>
  );
}
