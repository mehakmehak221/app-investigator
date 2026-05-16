import { HOT_CAKE_API_URL } from "./constants";

export type HotCakeFormData = {
  name: string;
  companyName: string;
  email: string;
  mobile: string;
  message: string;
};

export type HotCakeSubmission = HotCakeFormData & {
  id: string;
  createdAt: string;
};

type SuccessResponse = {
  success: true;
  message: string;
  data: HotCakeSubmission;
};

type ErrorResponse = {
  success: false;
  message: string;
  errors?: Record<string, string>;
};

export class HotCakeApiError extends Error {
  fieldErrors: Record<string, string>;

  constructor(message: string, fieldErrors: Record<string, string> = {}) {
    super(message);
    this.name = "HotCakeApiError";
    this.fieldErrors = fieldErrors;
  }
}

export async function submitHotCakeForm(
  data: HotCakeFormData,
): Promise<HotCakeSubmission> {
  const res = await fetch(`${HOT_CAKE_API_URL}/hot-cake`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const json = (await res.json()) as SuccessResponse | ErrorResponse;

  if (!res.ok || !json.success) {
    const err = json as ErrorResponse;
    throw new HotCakeApiError(
      err.message ?? "Something went wrong. Please try again.",
      err.errors ?? {},
    );
  }

  return json.data;
}
