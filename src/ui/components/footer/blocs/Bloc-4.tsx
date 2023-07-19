import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { FiInfo } from "react-icons/fi";
import { clsx } from "clsx";

// Import components
import { Typography } from "../../../design/typography/Typography";

const formSchema = z.object({
  email: z.string().email("incorrect email"),
});

type FormSchema = z.infer<typeof formSchema>;

export const BlocFour = () => {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormSchema> = () => {
    reset();
  };

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  return (
    <div className="flex flex-col space-y-4">
      <Typography variant="heading6">Join a NewsLetter</Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="relative flex flex-col gap-y-2">
          <label htmlFor="email" className="text-grey-trolley text-xs">
            Your Email
          </label>
          <input
            {...register("email")}
            type="text"
            name="email"
            className={clsx(["news-letter", errors.email && "outline-red-600"])}
            placeholder="Enter Your Email"
          />

          {errors.email && (
            <>
              <div className="info block absolute top-[60%] right-2">
                <FiInfo className="text-red-600 cursor-pointer " />
              </div>
              <p className="msg absolute top-[28%] -right-7  text-[12px] bg-red-600 py-0.5 px-2 ">
                {errors.email?.message}
              </p>
            </>
          )}
        </div>
        <input
          type="submit"
          value="Subscribe"
          className="submit-letter w-full mt-4"
        />
      </form>
    </div>
  );
};
