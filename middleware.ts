import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {CORS_WHITE_LIST, ORIGIN_HOST, ORIGIN_PORT} from './constants';

  export function middleware(request: NextRequest) {
   const response = NextResponse.next()
   const refUrl = getOrigin(request);
    if(CORS_WHITE_LIST.includes(refUrl) || CORS_WHITE_LIST.includes(refUrl + "/")){
      response.headers.set('Access-Control-Allow-Origin', refUrl);
    }
    return response;
}

/**
 * This method extracts the address of the page that the user made the request from
 * @param request request object
 * @returns origin url
 */
function getOrigin(request:NextRequest){
  const origin = request.headers.get("Origin") === `${ORIGIN_HOST}:${ORIGIN_PORT}` ? undefined : request.headers.get("Origin");
  const reqUrl = origin ?? request.headers.get("Referer") ?? request.url;
  return new URL(reqUrl).origin; 
}
