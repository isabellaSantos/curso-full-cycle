FROM golang:alpine as base

WORKDIR /app

RUN go mod init module
RUN go mod download && go mod verify 

COPY . .

RUN go build -v -o hello .

FROM scratch

WORKDIR /app

COPY --from=base /app/hello .

CMD ["./hello"]
