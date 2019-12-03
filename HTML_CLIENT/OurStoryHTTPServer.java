import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.io.FileWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Date;
import java.util.StringTokenizer;
import java.text.SimpleDateFormat;

public class OurStoryHTTPServer implements Runnable {

  static final File WEB_ROOT = new File(".");
  static final String DEFAULT_FILE = "public/index.html";
  static final String FILE_NOT_FOUND = "404.html";
  static final String METHOD_NOT_SUPPORTED = "not_supported.html";
  
  // port to listen connection 
  static final int PORT = 8080;

  // Client Connection via Socket Class
  private Socket connect;
  public int storyTally = 10;
  public String currentFile;

  public OurStoryHTTPServer(Socket c) {
    connect = c;
  }

  public static void main(String[] args) {

    try {
      ServerSocket serverConnect = new ServerSocket(PORT);
      System.out.println("Server started.\nListening for connections on port : " + PORT + " ...\n");

      // we listen until user halts server execution
      while (true) {
        OurStoryHTTPServer myServer = new OurStoryHTTPServer(serverConnect.accept());

          System.out.println("Connecton opened. (" + new Date() + ")");

        // create dedicated thread to manage the client connection
        Thread thread = new Thread(myServer);
        thread.start();
      }

    } catch (IOException e) {
      System.err.println("Server Connection error : " + e.getMessage());
    }
  }

	@Override
	public void run() {

    BufferedReader in = null; 
    PrintWriter out = null; 
    BufferedOutputStream dataOut = null;
		String fileRequested = null;
		
		try {
      //setting up connections through socket and writer
			in = new BufferedReader(new InputStreamReader(connect.getInputStream()));
			out = new PrintWriter(connect.getOutputStream());
			dataOut = new BufferedOutputStream(connect.getOutputStream());
			
			// get first line of the request from the client
			String input = in.readLine();
			// we parse the request with a string tokenizer
			StringTokenizer parse = new StringTokenizer(input);
	
			String method = parse.nextToken().toUpperCase(); // we get the HTTP method of the client
			// we get file requested
			fileRequested = parse.nextToken().toLowerCase();

			// we support only GET and HEAD methods, we check
			if (method.equals("GET")  ||  method.equals("HEAD")) {
				// GET or HEAD method
				if (fileRequested.endsWith("/")) {
					fileRequested += DEFAULT_FILE;
				}
				
				File file = new File(WEB_ROOT, fileRequested);
				int fileLength = (int) file.length();
				String content = getContentType(fileRequested);
				
				if (method.equals("GET")) { // GET method so we return content
					byte[] fileData = readFileData(file, fileLength);
					
					// send HTTP Headers
					out.println("HTTP/1.1 200 OK");
					out.println("Server: Java HTTP Server");
					out.println("Date: " + new Date());
					out.println("Content-type: " + content);
					out.println("Content-length: " + fileLength);
					out.println(); // blank line between headers and content, very important !
					out.flush(); // flush character output stream buffer
					
					dataOut.write(fileData, 0, fileLength);
					dataOut.flush();
				}
				
			}
			else if (method.equals("POST")){
				System.out.println(input);
				
			} else {

				// we return the not supported file to the client
				File file = new File(WEB_ROOT, METHOD_NOT_SUPPORTED);
				int fileLength = (int) file.length();

				//read content to return to client
				byte[] fileData = readFileData(file, fileLength);
					
				//here is the ip header
				out.println("HTTP/1.1 501 Not Implemented");
				out.println("Server: OurStory");
				out.println("Date: " + new Date());
				out.println("Content-type: " + "text/html");
				out.println("Content-length: " + fileLength);
				out.println();
				out.flush(); 


				dataOut.write(fileData, 0, fileLength);
				dataOut.flush();
				
			}
			
		} catch (FileNotFoundException fnfe) {
			try {
				fourOhFour(out, dataOut, fileRequested);
			} catch (IOException ioe) {
				System.err.println("Error with file not found exception : " + ioe.getMessage());
			}
			
		} catch (IOException ioe) {
			System.err.println("Server error : " + ioe);
		} finally {
			try {
				in.close();
				out.close();
				dataOut.close();
				connect.close(); // we close socket connection
			} catch (Exception e) {
				System.err.println("Error closing stream : " + e.getMessage());
			} 
		}
		
		
	}
	
	private byte[] readFileData(File file, int fileLength) throws IOException {
		FileInputStream fileIn = null;
		byte[] fileData = new byte[fileLength];
		
		try {
			fileIn = new FileInputStream(file);
			fileIn.read(fileData);
		} finally {
			if (fileIn != null) 
				fileIn.close();
		}
		
		return fileData;
	}
	
	//this method is for iterating the tally
	private void iterateTally(){
		if(storyTally == 0) {storyTally = 10;} else {storyTally-=1;}
	}

	// return supported MIME Types
	private String getContentType(String fileRequested) {
		if (fileRequested.endsWith(".htm")  ||  fileRequested.endsWith(".html"))
			return "text/html";
		else if (fileRequested.endsWith(".css"))
			return "text/css";
			else if (fileRequested.endsWith(".js"))
			return "text/js";
		else
			return "text/plain";
	}
	
	private void fourOhFour(PrintWriter out, OutputStream dataOut, String fileRequested) throws IOException {
		File file = new File(WEB_ROOT, FILE_NOT_FOUND);
		int fileLength = (int) file.length();
		byte[] fileData = readFileData(file, fileLength);
		
		out.println("HTTP/1.1 404 File Not Found");
		out.println("Server: OurStory");
		out.println("Date: " + new Date());
		out.println("Content-type: " + "text/html");
		out.println("Content-length: " + fileLength);
		out.println(); // blank line between headers and content, very important !
		out.flush(); // flush character output stream buffer
		
		dataOut.write(fileData, 0, fileLength);
		dataOut.flush();
	}

	private void createHTML(String updated) {
		try{
		BufferedWriter bw = new BufferedWriter(new FileWriter(currentFile));
		if(storyTally == 10){
			bw.write("<html><head><title>" + updated + "</title></head><body><p>");
		}
		else if(storyTally == 0){
			bw.write(updated + "</p></body></html>");
		}
		else
			bw.write(updated);
		bw.close();
		}
		catch(IOException e){
		System.out.println(e);
		}
	}

	private void randomizeFileName(){
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("File-ddMMyy-hhmmss.SSS.txt");
		currentFile = new File(simpleDateFormat.format( new Date() )).getName();
	}
}