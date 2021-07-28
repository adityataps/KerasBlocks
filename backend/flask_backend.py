import json
import time

from flask import Flask, request
import asyncio
import subprocess

app = Flask(__name__)

@app.route("/backend", methods=["POST"])
def receive_posted_pycode():
    print("\n\n\n")
    request_json = request.get_json(force=True)
    python_code = request_json['pycode']

    with open("pycode.py", "w") as input:
        input.write(python_code)
        input.close()

    time.sleep(2)

    executed_code = execute_pycode()
    # execute_return = ""
    # if executed_code[1] == 0:
    #     execute_return = executed_code[0]

    # print(executed_code)
    return {'flask_response': executed_code}

def execute_pycode():

    with open("output.txt", "w") as output:
        output = subprocess.check_call(["python", "pycode.py"], stdout=output) # TODO make successes more consistent,
                                                                               # have it return output as JSON?
        # output = proc.stdout.read()
        print(output)

    # with open("output.txt", "w") as output:
    #
    #     subp = subprocess.Popen(["python", "pycode.py"], stdout=output)
    #
    #     subp.wait()
    #
    #     # print(subp.communicate())
    #
    #     # print(" %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% subp is " + str(subp.returncode))
    #
    #     if (subp.returncode == 0):
    #         print("success")
    #     else:
    #         print("fail")
    #
    #
    #
    #     # content = output.readlines()
    #     output.close()
    #
    # with open("output.txt") as output:
    #     content = output.read()
    #     output.close()

    return output