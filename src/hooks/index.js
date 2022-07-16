import { useEffect, useState } from "react";
import services from "services";

export const useRegister = ({ onSuccess }) => {
    const register = async (data) => {
      const result = await services.auth.register(data);
      result.success && onSuccess();
    };
  
    return register;
  };