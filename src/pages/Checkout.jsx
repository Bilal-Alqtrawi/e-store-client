import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

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
`;

function Checkout() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    setIsLoading(true);
    console.log(data);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/orderconfirmation");
    }, 500);
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
            })}
            invalid={errors?.email?.message}
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
              {...register("billingEmail1")}
            />
            <FormInput
              type="text"
              placeholder="Second Billing Address (Opt)"
              {...register("billingEmail2")}
            />
            <FormInput
              type="text"
              placeholder="Billing City"
              {...register("billingCity")}
            />
          </div>
        </FormRow>

        <FormRow area="address">
          <FormLabel htmlFor="shippingEmail">Shipping Address *</FormLabel>
          <div>
            <FormInput
              type="text"
              id="shippingEmail"
              placeholder="Enter first line"
              {...register("shippingEmail1", {
                required: "The field is required",
              })}
              invalid={errors?.shippingEmail1?.message}
            />
            <FormInput
              type="text"
              placeholder="Second Shipping Address (Opt)"
              {...register("shippingEmail2")}
            />
            <FormInput
              type="text"
              placeholder="Shipping City"
              {...register("shippingCity")}
            />
          </div>
        </FormRow>

        <FormRow area="actions">
          <Button
            type="reset"
            variant="outlined"
            sx={{ textTransform: "capitalize" }}
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
