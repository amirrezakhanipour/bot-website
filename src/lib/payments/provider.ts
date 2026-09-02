export interface CreateOrderPaymentInput {
  orderId: string
  amount: number
  currency: string
  description?: string
  returnUrl?: string
  cancelUrl?: string
}

export interface PaymentResult {
  success: boolean
  transactionId?: string
  redirectUrl?: string
  errorMessage?: string
  rawResponse?: Record<string, unknown>
}

export interface PaymentProvider {
  id: string
  name: string
  createPayment(input: CreateOrderPaymentInput): Promise<PaymentResult>
  verifyCallback(params: Record<string, unknown>): Promise<PaymentResult>
  verifyWebhook(payload: unknown, signature: string): Promise<PaymentResult>
}
