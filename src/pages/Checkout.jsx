import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { toast } from "react-toastify";

const Form = styled.form`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  grid-template-columns: 1fr 1fr;

  gap: 10px 30px;
  align-items: start;
  justify-content: space-between;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 0.5rem;

  ${(props) =>
    props.area === "full" &&
    css`
      margin: 1rem 0;
      grid-column: 1 / -1;
    `}
  ${(props) =>
    props.area === "address" &&
    css`
      align-items: start;
      & input {
        margin-bottom: 0.5rem;
      }
    `}
  ${(props) =>
    props.area === "actions" &&
    css`
      display: flex;
      justify-content: space-between;
      grid-column: 1 / -1;
      margin-top: 2rem;
    `}
`;
const FormInput = styled.input`
  border: 1px solid #888;
  border-color: ${(props) => props.invalid && "red"};
  margin-bottom: 4px;

  ${(props) =>
    props.type !== "checkbox" &&
    css`
      width: 100%;
      padding: 4px 8px;
    `}
  &:focus {
    outline: none;
    border-color: ${(props) => (props.invalid ? "red " : "#f79546")};
  }
`;
const FormLabel = styled.label`
  width: 140px;
  font-size: 0.9rem;
`;

const FormError = styled.p`
  font-weight: 500;
  color: #eb2828;
  grid-column: 2 / -1;
  padding: 6px;
  background-color: #fafafa;
  border-radius: 6px;
  margin: 4px 0;
`;

function Checkout() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: localStorage.getItem("checkoutData")
      ? JSON.parse(localStorage.getItem("checkoutData"))
      : null,
  });

  const isShipping = watch("isShipping");

  useEffect(() => {
    if (isShipping) {
      setValue("shippingEmail1", getValues("billingEmail1"));
      setValue("shippingEmail2", getValues("billingEmail2"));
      setValue("shippingCity", getValues("billingCity"));
    }
  }, [isShipping, setValue, getValues]);

  function onSubmit(data) {
    setIsLoading(true);
    console.log(data);

    localStorage.setItem("checkoutData", JSON.stringify(data));

    toast.success("Success Checkout all your orders");
    setTimeout(() => {
      setIsLoading(false);
      navigate("/orderconfirmation");
    }, 3100);
  }

  function onReset() {
    reset();
    setIsLoading(false);
  }

  function onError(error) {
    console.log(error);
  }

  return (
    <>
      <Typography
        component="h2"
        fontWeight="bold"
        fontSize={25}
        marginBottom={2}
      >
        Shopping Checkout
      </Typography>

      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <Typography
          component="h3"
          className="col-span-full"
          fontWeight="bold"
          fontSize={20}
        >
          Your Details
        </Typography>

        <hr className="border-1 col-span-full mb-5 border-gray-400" />

        <FormRow>
          <FormLabel htmlFor="name">Name *</FormLabel>
          <FormInput
            type="text"
            id="name"
            placeholder="Enter Name"
            {...register("name", {
              required: "This field is required",
            })}
            invalid={errors?.name?.message}
            aria-invalid={errors?.name ? "true" : "false"}
            aria-describedby={errors?.name ? "name-error" : undefined}
          />
          {errors?.name?.message && (
            <FormError>{errors.name.message}</FormError>
          )}
        </FormRow>

        <FormRow>
          <FormLabel htmlFor="email">Email *</FormLabel>
          <FormInput
            type="email"
            id="email"
            placeholder="Enter Email"
            {...register("email", {
              required: "This field is required",
              // For validation
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            invalid={errors?.email?.message}
            aria-invalid={errors?.email ? "true" : "false"}
            aria-describedby={errors?.email ? "email-error" : undefined}
          />
          {errors?.email?.message && (
            <FormError>{errors.email.message}</FormError>
          )}
        </FormRow>

        <Typography
          component="h3"
          fontWeight="bold"
          fontSize={20}
          marginTop={4}
          className="col-span-full"
        >
          Address Details
        </Typography>

        <hr className="col-span-full mb-5 border-2 border-gray-400" />

        <FormRow area="full">
          <FormInput
            type="checkbox"
            id="shipping"
            {...register("isShipping")}
          />
          <FormLabel htmlFor="shipping">Copy to shipping</FormLabel>
        </FormRow>

        <FormRow area="address">
          <FormLabel htmlFor="billingEmail">Billing Address *</FormLabel>
          <div>
            <FormInput
              type="text"
              id="billingEmail"
              placeholder="Enter first line"
              {...register("billingAddress1", {
                required: "Billing address is required",
              })}
              invalid={errors?.billingAddress1?.message}
              aria-invalid={errors?.billingAddress1 ? "true" : "false"}
              aria-describedby={
                errors?.billingAddress1 ? "billingAddress1-error" : undefined
              }
            />
            {errors?.billingAddress1?.message && (
              <FormError>{errors.billingAddress1.message}</FormError>
            )}
            <FormInput
              type="text"
              placeholder="Second Billing Address (Opt)"
              {...register("billingAddress2")}
            />
            <FormInput
              type="text"
              placeholder="Billing City"
              {...register("billingCity", {
                required: "Billing city is required",
              })}
              invalid={errors?.billingCity?.message}
              aria-invalid={errors?.billingCity ? "true" : "false"}
              aria-describedby={
                errors?.billingCity ? "billingCity-error" : undefined
              }
            />
            {errors?.billingCity?.message && (
              <FormError>{errors.billingCity.message}</FormError>
            )}
          </div>
        </FormRow>

        <FormRow area="address">
          <FormLabel htmlFor="shippingEmail">Shipping Address *</FormLabel>
          <div>
            <FormInput
              type="text"
              id="shippingEmail"
              placeholder="Enter first line"
              {...register("shippingAddress1", {
                required: "Shipping address is required",
              })}
              invalid={errors?.shippingAddress1?.message}
              aria-invalid={errors?.shippingAddress1 ? "true" : "false"}
              aria-describedby={
                errors?.shippingAddress1 ? "shippingEmail1-error" : undefined
              }
            />
            {errors?.shippingEmail1?.message && (
              <FormError>{errors.shippingEmail1.message}</FormError>
            )}
            <FormInput
              type="text"
              placeholder="Second Shipping Address (Opt)"
              {...register("shippingEmail2")}
            />
            <FormInput
              type="text"
              placeholder="Shipping City"
              {...register("shippingCity", {
                required: "Shipping city is required",
              })}
              invalid={errors?.shippingCity?.message}
              aria-invalid={errors?.shippingCity ? "true" : "false"}
              aria-describedby={
                errors?.shippingCity ? "shippingCity-error" : undefined
              }
            />
            {errors?.shippingCity?.message && (
              <FormError>{errors.shippingCity.message}</FormError>
            )}
          </div>
        </FormRow>

        <FormRow area="actions">
          <Button
            type="button"
            variant="outlined"
            sx={{ textTransform: "capitalize" }}
            onClick={onReset}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={
              isLoading
                ? {
                    backgroundColor: "#999",
                    textTransform: "capitalize",
                  }
                : { textTransform: "capitalize" }
            }
            disabled={isLoading}
          >
            {isLoading ? "Submitting" : "Confirm Oreder"}
          </Button>
        </FormRow>
      </Form>
    </>
  );
}

export default Checkout;
