
-- Add INSERT policy restricting to own user_id and pending status
CREATE POLICY "Authenticated users can create their own pending payments"
ON public.payments
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id AND status = 'pending');

-- Block UPDATE from client
CREATE POLICY "No client updates on payments"
ON public.payments
FOR UPDATE
TO authenticated
USING (false);

-- Block DELETE from client
CREATE POLICY "No client deletes on payments"
ON public.payments
FOR DELETE
TO authenticated
USING (false);

-- Add trigger to enforce pending status on insert
CREATE TRIGGER enforce_pending_status_on_insert
BEFORE INSERT ON public.payments
FOR EACH ROW
EXECUTE FUNCTION public.validate_payment_insert();
