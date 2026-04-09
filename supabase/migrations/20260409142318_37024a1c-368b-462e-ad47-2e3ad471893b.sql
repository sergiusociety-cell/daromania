-- Remove the client-side INSERT policy on payments
DROP POLICY IF EXISTS "Users can create their own payments" ON public.payments;

-- Add a validation trigger to enforce status = 'pending' on insert
CREATE OR REPLACE FUNCTION public.validate_payment_insert()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NEW.status IS DISTINCT FROM 'pending' THEN
    RAISE EXCEPTION 'Payment status must be pending on insert';
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER enforce_payment_status_on_insert
BEFORE INSERT ON public.payments
FOR EACH ROW
EXECUTE FUNCTION public.validate_payment_insert();